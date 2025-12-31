/**
 * validate-korean.js - Pre-flight validation for Korean text in HTML slides
 *
 * Checks for common Korean typography issues before PPTX conversion:
 * 1. word-break: keep-all usage
 * 2. Line height >= 1.5 for Korean body text
 * 3. Minimum font size (10pt)
 * 4. Grid column count (max 4 for Korean content)
 * 5. Character count vs recommended limits
 *
 * Usage:
 *   import { validateKoreanSlide, validateAllSlides } from './validate-korean.js';
 *   const warnings = await validateKoreanSlide('slides/slide-01.html');
 */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

// Korean character detection regex
const KOREAN_REGEX = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;

// Points to pixels conversion
const PT_PER_PX = 0.75;

/**
 * Validate a single HTML slide for Korean typography issues
 * @param {string} htmlFile - Path to the HTML file
 * @returns {Promise<{warnings: string[], errors: string[]}>}
 */
export async function validateKoreanSlide(htmlFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    const absolutePath = path.resolve(htmlFile);
    await page.goto(`file://${absolutePath}`);

    const result = await page.evaluate(() => {
      const warnings = [];
      const errors = [];
      const KOREAN_REGEX = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;
      const PT_PER_PX = 0.75;

      // Helper: Check if text contains Korean
      const containsKorean = (text) => KOREAN_REGEX.test(text);

      // Helper: Count Korean characters
      const countKorean = (text) => {
        return (text.match(/[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g) || []).length;
      };

      // Helper: Get element path for better error messages
      const getElementPath = (el) => {
        const tag = el.tagName.toLowerCase();
        const text = el.textContent.trim().substring(0, 30);
        return `<${tag}> "${text}${text.length >= 30 ? '...' : ''}"`;
      };

      // Check all text elements
      document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li').forEach(el => {
        const text = el.textContent.trim();
        if (!text || !containsKorean(text)) return;

        const computed = window.getComputedStyle(el);
        const fontSize = parseFloat(computed.fontSize) * PT_PER_PX;
        const fontWeight = parseInt(computed.fontWeight);
        const rect = el.getBoundingClientRect();
        const widthPt = rect.width * PT_PER_PX;

        // Check 1: word-break: keep-all
        let hasKeepAll = false;
        let current = el;
        while (current && current !== document.body) {
          const style = window.getComputedStyle(current);
          if (style.wordBreak === 'keep-all') {
            hasKeepAll = true;
            break;
          }
          current = current.parentElement;
        }

        if (!hasKeepAll) {
          errors.push(`Missing word-break: keep-all on ${getElementPath(el)}`);
        }

        // Check 2: Line height for body text
        const lineHeight = parseFloat(computed.lineHeight);
        const lineHeightRatio = lineHeight / parseFloat(computed.fontSize);
        if (fontSize <= 20 && lineHeightRatio < 1.5) {
          warnings.push(`Low line-height (${lineHeightRatio.toFixed(2)}) on Korean body text: ${getElementPath(el)}`);
        }

        // Check 3: Minimum font size
        if (fontSize < 10) {
          warnings.push(`Font too small (${fontSize.toFixed(1)}pt) for Korean: ${getElementPath(el)}`);
        }

        // Check 4: Character count vs width
        const koreanChars = countKorean(text);
        const totalChars = text.length;
        if (koreanChars > 5 && widthPt > 0) {
          // Calculate recommended max chars based on width
          const multiplier = fontWeight >= 600 ? 1.15 : 1.1;
          const maxRecommended = Math.floor(widthPt / (fontSize * multiplier));

          if (totalChars > maxRecommended * 1.15) {
            warnings.push(
              `Potential overflow: ${totalChars} chars in ${widthPt.toFixed(0)}pt width ` +
              `(recommend max ${maxRecommended}) on ${getElementPath(el)}`
            );
          }
        }
      });

      // Check 5: Grid columns
      document.querySelectorAll('[style*="grid-template-columns"]').forEach(el => {
        const style = el.getAttribute('style') || '';
        const gridMatch = style.match(/grid-template-columns:\s*([^;]+)/);
        if (!gridMatch) return;

        const gridValue = gridMatch[1];
        let colCount = 0;

        // Count columns from repeat()
        const repeatMatch = gridValue.match(/repeat\((\d+)/);
        if (repeatMatch) {
          colCount = parseInt(repeatMatch[1]);
        } else {
          // Count space-separated values (1fr 1fr 1fr = 3 columns)
          colCount = gridValue.trim().split(/\s+/).filter(v => v && v !== ',').length;
        }

        // Check if grid contains Korean text
        if (colCount >= 5 && containsKorean(el.textContent)) {
          warnings.push(`${colCount}-column grid with Korean text may be too cramped`);
        }
      });

      return { warnings, errors };
    });

    await browser.close();
    return result;
  } catch (error) {
    await browser.close();
    return {
      warnings: [],
      errors: [`Failed to validate ${htmlFile}: ${error.message}`]
    };
  }
}

/**
 * Validate all HTML slides in a directory
 * @param {string} slidesDir - Path to slides directory
 * @returns {Promise<Map<string, {warnings: string[], errors: string[]}>>}
 */
export async function validateAllSlides(slidesDir = './slides') {
  const results = new Map();

  if (!fs.existsSync(slidesDir)) {
    console.error(`Directory not found: ${slidesDir}`);
    return results;
  }

  const files = fs.readdirSync(slidesDir)
    .filter(f => f.match(/^slide-\d+\.html$/))
    .sort();

  for (const file of files) {
    const filePath = path.join(slidesDir, file);
    const result = await validateKoreanSlide(filePath);
    results.set(file, result);
  }

  return results;
}

/**
 * Print validation results to console
 * @param {Map} results - Results from validateAllSlides
 */
export function printResults(results) {
  let totalWarnings = 0;
  let totalErrors = 0;

  for (const [file, { warnings, errors }] of results) {
    if (warnings.length === 0 && errors.length === 0) continue;

    console.log(`\n${file}:`);

    for (const error of errors) {
      console.log(`  [ERROR] ${error}`);
      totalErrors++;
    }

    for (const warning of warnings) {
      console.log(`  [WARN] ${warning}`);
      totalWarnings++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total errors: ${totalErrors}`);
  console.log(`Total warnings: ${totalWarnings}`);

  return { totalWarnings, totalErrors };
}

// CLI entry point
const isMainModule = import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`;
if (isMainModule) {
  const slidesDir = process.argv[2] || './slides';
  console.log(`Validating Korean text in ${slidesDir}...`);

  validateAllSlides(slidesDir).then(results => {
    printResults(results);
  });
}

export default validateKoreanSlide;
