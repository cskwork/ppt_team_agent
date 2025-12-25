import html2pptx from './.claude/skills/pptx-skill/scripts/html2pptx.js';
import PptxGenJS from 'pptxgenjs';
import fs from 'fs';
import path from 'path';

async function main() {
  // Find all slide HTML files
  const slidesDir = './slides';
  const files = fs.readdirSync(slidesDir)
    .filter(f => f.match(/^slide-\d+\.html$/))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  if (files.length === 0) {
    console.error('No slide files found in slides/ directory');
    process.exit(1);
  }

  console.log(`Found ${files.length} slides to convert...`);

  // Create presentation
  const pres = new PptxGenJS();
  pres.layout = 'LAYOUT_16x9'; // 10" x 5.625" (720pt x 405pt)

  // Convert each slide
  for (const file of files) {
    const filePath = path.join(slidesDir, file);
    console.log(`Converting ${file}...`);
    try {
      await html2pptx(filePath, pres, { lenient: true });
    } catch (error) {
      console.error(`Error converting ${file}: ${error.message}`);
      process.exit(1);
    }
  }

  // Save presentation
  const outputPath = './output/presentation.pptx';

  // Create output directory if it doesn't exist
  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output', { recursive: true });
  }

  await pres.writeFile({ fileName: outputPath });
  console.log(`\nPresentation saved to ${outputPath}`);
}

main().catch(console.error);
