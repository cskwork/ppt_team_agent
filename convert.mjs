import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import PptxGenJS from 'pptxgenjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PT_PER_PX = 0.75;
const PX_PER_IN = 96;

// Get body dimensions
async function getBodyDimensions(page) {
  return await page.evaluate(() => {
    const body = document.body;
    const style = window.getComputedStyle(body);
    return {
      width: parseFloat(style.width),
      height: parseFloat(style.height)
    };
  });
}

// Extract slide data from HTML
async function extractSlideData(page) {
  return await page.evaluate(() => {
    const PT_PER_PX = 0.75;
    const PX_PER_IN = 96;

    const pxToInch = (px) => px / PX_PER_IN;
    const pxToPoints = (pxStr) => parseFloat(pxStr) * PT_PER_PX;
    const rgbToHex = (rgbStr) => {
      if (rgbStr === 'rgba(0, 0, 0, 0)' || rgbStr === 'transparent') return 'FFFFFF';
      const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return 'FFFFFF';
      return match.slice(1).map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
    };

    const extractAlpha = (rgbStr) => {
      const match = rgbStr.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (!match || !match[4]) return null;
      return Math.round((1 - parseFloat(match[4])) * 100);
    };

    const body = document.body;
    const bodyStyle = window.getComputedStyle(body);
    const bgColor = bodyStyle.backgroundColor;

    const background = { type: 'color', value: rgbToHex(bgColor) };
    const elements = [];
    const textTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI'];
    const processed = new Set();

    document.querySelectorAll('*').forEach((el) => {
      if (processed.has(el)) return;

      // Images
      if (el.tagName === 'IMG') {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          elements.push({
            type: 'image',
            src: el.src,
            position: { x: pxToInch(rect.left), y: pxToInch(rect.top), w: pxToInch(rect.width), h: pxToInch(rect.height) }
          });
          processed.add(el);
          return;
        }
      }

      // DIVs with backgrounds as shapes
      if (el.tagName === 'DIV') {
        const computed = window.getComputedStyle(el);
        const hasBg = computed.backgroundColor && computed.backgroundColor !== 'rgba(0, 0, 0, 0)';
        const hasBorder = parseFloat(computed.borderWidth) > 0;

        if (hasBg || hasBorder) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            const radiusValue = parseFloat(computed.borderRadius) || 0;
            elements.push({
              type: 'shape',
              position: { x: pxToInch(rect.left), y: pxToInch(rect.top), w: pxToInch(rect.width), h: pxToInch(rect.height) },
              shape: {
                fill: hasBg ? rgbToHex(computed.backgroundColor) : null,
                transparency: hasBg ? extractAlpha(computed.backgroundColor) : null,
                line: hasBorder ? { color: rgbToHex(computed.borderColor), width: pxToPoints(computed.borderWidth) } : null,
                rectRadius: radiusValue / PX_PER_IN
              }
            });
            processed.add(el);
          }
        }
      }

      // Text elements
      if (!textTags.includes(el.tagName)) return;

      const rect = el.getBoundingClientRect();
      const text = el.textContent.trim();
      if (rect.width === 0 || rect.height === 0 || !text) return;

      const computed = window.getComputedStyle(el);
      const isBold = computed.fontWeight === 'bold' || parseInt(computed.fontWeight) >= 600;

      elements.push({
        type: el.tagName.toLowerCase(),
        text: text,
        position: { x: pxToInch(rect.left), y: pxToInch(rect.top), w: pxToInch(rect.width), h: pxToInch(rect.height) },
        style: {
          fontSize: pxToPoints(computed.fontSize),
          fontFace: computed.fontFamily.split(',')[0].replace(/['"]/g, '').trim(),
          color: rgbToHex(computed.color),
          bold: isBold,
          align: computed.textAlign === 'start' ? 'left' : computed.textAlign,
          lineSpacing: pxToPoints(computed.lineHeight)
        }
      });
      processed.add(el);
    });

    return { background, elements };
  });
}

async function convertSlide(htmlFile, pres) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = path.isAbsolute(htmlFile) ? htmlFile : path.join(process.cwd(), htmlFile);
  await page.goto(`file://${filePath}`);

  const bodyDimensions = await getBodyDimensions(page);
  await page.setViewportSize({
    width: Math.round(bodyDimensions.width),
    height: Math.round(bodyDimensions.height)
  });

  const slideData = await extractSlideData(page);
  await browser.close();

  const slide = pres.addSlide();

  // Background
  if (slideData.background.type === 'color') {
    slide.background = { color: slideData.background.value };
  }

  // Elements
  for (const el of slideData.elements) {
    if (el.type === 'image') {
      slide.addImage({
        path: el.src,
        x: el.position.x,
        y: el.position.y,
        w: el.position.w,
        h: el.position.h
      });
    } else if (el.type === 'shape') {
      const opts = {
        x: el.position.x,
        y: el.position.y,
        w: el.position.w,
        h: el.position.h
      };
      if (el.shape.fill) {
        opts.fill = { color: el.shape.fill };
        if (el.shape.transparency) opts.fill.transparency = el.shape.transparency;
      }
      if (el.shape.line) opts.line = el.shape.line;
      if (el.shape.rectRadius > 0) {
        opts.rectRadius = el.shape.rectRadius;
        slide.addShape(pres.ShapeType.roundRect, opts);
      } else {
        slide.addShape(pres.ShapeType.rect, opts);
      }
    } else {
      slide.addText(el.text, {
        x: el.position.x,
        y: el.position.y,
        w: el.position.w,
        h: el.position.h,
        fontSize: el.style.fontSize,
        fontFace: el.style.fontFace,
        color: el.style.color,
        bold: el.style.bold,
        align: el.style.align,
        valign: 'top'
      });
    }
  }

  return slide;
}

async function main() {
  const pres = new PptxGenJS();
  pres.layout = 'LAYOUT_WIDE';

  const slidesDir = path.join(__dirname, 'slides');
  const files = fs.readdirSync(slidesDir)
    .filter(f => f.endsWith('.html'))
    .sort();

  console.log(`Converting ${files.length} slides...`);

  for (const file of files) {
    console.log(`  - ${file}`);
    await convertSlide(path.join(slidesDir, file), pres);
  }

  const outputPath = path.join(__dirname, 'presentation.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`\nSaved: ${outputPath}`);
}

main().catch(console.error);
