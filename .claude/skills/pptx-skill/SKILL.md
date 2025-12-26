---
name: pptx-skill
description: Converts HTML slides to PowerPoint (PPTX) files. Use when PPTX creation, editing, or thumbnail generation is needed.
---

# PPTX Skill - PowerPoint Conversion Skill

A skill that converts HTML slides into PowerPoint presentation files.

## Feature Overview

### 1. Create New Presentation (HTML → PPTX)
Convert HTML slide files to PowerPoint

### 2. Edit Existing Presentation
Modify content of PPTX files

### 3. Generate Thumbnails
Create preview images of presentations

## Core Workflow

### HTML → PPTX Conversion

1. **Prepare HTML Slides**
   - Verify HTML files exist in `slides/` directory
   - Validate each file follows 720pt × 405pt (16:9) specification

2. **Run html2pptx.js**
   ```bash
   node .claude/skills/pptx-skill/scripts/html2pptx.js
   ```

3. **Verify Results**
   - Check generated PPTX file
   - Visual verification via thumbnails

## Script Usage

### html2pptx.js
Convert HTML files to PPTX

```javascript
import { html2pptx } from './.claude/skills/pptx-skill/scripts/html2pptx.js';
import PptxGenJS from 'pptxgenjs';

const pres = new PptxGenJS();
pres.layout = 'LAYOUT_WIDE'; // 16:9

// Convert each slide
await html2pptx('slides/slide-01.html', pres);
await html2pptx('slides/slide-02.html', pres);

// Save
await pres.writeFile({ fileName: 'presentation.pptx' });
```

### thumbnail.py
Generate presentation thumbnail grid

```bash
python .claude/skills/pptx-skill/scripts/thumbnail.py presentation.pptx output-thumbnail
```

Options:
- `--cols N`: Number of columns (default 5, range 3-6)
- `--outline-placeholders`: Display placeholder areas

### pack.py / unpack.py
PPTX file packaging/unpackaging

```bash
# Unpack
python .claude/skills/pptx-skill/ooxml/scripts/unpack.py presentation.pptx output_dir

# Pack
python .claude/skills/pptx-skill/ooxml/scripts/pack.py input_dir presentation.pptx
```

### validate.py
Validate PPTX structure

```bash
python .claude/skills/pptx-skill/ooxml/scripts/validate.py unpacked_dir --original presentation.pptx
```

## Detailed Documentation

- [html2pptx.md](html2pptx.md) - HTML to PPTX Conversion Detailed Guide
- [ooxml.md](ooxml.md) - Office Open XML Technical Reference

## PptxGenJS Core Rules

### Color Codes
```javascript
// Correct usage - without #
{ color: 'FF0000' }

// Incorrect usage - causes file corruption
{ color: '#FF0000' }
```

### Adding Slides
```javascript
const slide = pres.addSlide();

// Add text
slide.addText('Title', {
  x: 0.5,
  y: 0.5,
  w: 9,
  h: 1,
  fontSize: 36,
  color: '1a1a2e',
  bold: true
});

// Add image
slide.addImage({
  path: 'image.png',
  x: 1,
  y: 2,
  w: 4,
  h: 3
});

// Add shape
slide.addShape(pres.ShapeType.rect, {
  x: 0.5,
  y: 1,
  w: 3,
  h: 2,
  fill: { color: '1e3a5f' }
});
```

### Adding Charts
```javascript
// Bar chart
slide.addChart(pres.ChartType.bar, [
  {
    name: 'Series 1',
    labels: ['A', 'B', 'C'],
    values: [10, 20, 30]
  }
], {
  x: 1,
  y: 2,
  w: 8,
  h: 4
});

// Pie chart
slide.addChart(pres.ChartType.pie, [...], {...});

// Line chart
slide.addChart(pres.ChartType.line, [...], {...});
```

## Complete Conversion Process

```
┌─────────────────┐
│   HTML Slides   │
│   slides/*.html │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  html2pptx.js   │
│  (Playwright +  │
│   PptxGenJS)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   PPTX File     │
│ presentation.   │
│     pptx        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  thumbnail.py   │
│   (Preview)     │
└─────────────────┘
```

## Dependencies

### Node.js
- pptxgenjs: PowerPoint generation
- playwright: Browser rendering
- sharp: Image processing

### Python
- markitdown: Markdown conversion
- defusedxml: XML parsing
- pillow: Image processing

### System
- LibreOffice: PDF/image conversion (soffice)
- Poppler: PDF to image (pdftoppm)

## Important Notes

1. **Color Codes**: Do not use # prefix in PptxGenJS
2. **Fonts**: Use only web-safe fonts
3. **Text**: Only p, h1-h6, ul, ol tags are converted
4. **Gradients**: CSS gradients are replaced with images
5. **Verification**: Always verify with thumbnails after conversion
