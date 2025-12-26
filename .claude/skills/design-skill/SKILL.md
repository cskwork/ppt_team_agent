---
name: design-skill
description: Design presentation slides as elegant HTML. Use when HTML slide generation, visual design, and layout composition are needed.
---

# Design Skill - Professional Presentation Design System

A skill for designing HTML slides for top-tier business presentations.
Provides minimal and sophisticated design, professional typography, and refined layouts.

---

## Core Design Philosophy

### 1. Less is More
- Remove unnecessary decorative elements
- Design where content is the protagonist
- Actively utilize whitespace
- Clarify visual hierarchy

### 2. Typography-Centered Design
- Use Pretendard as the default font
- Create visual impact through font size contrast
- Fine-tune letter-spacing and line-height
- Express emphasis through weight variations

### 3. Strategic Color Usage
- Limited color palette (2-3 colors)
- Monotone base + accent color
- Set mood with background colors
- Ensure readability with high contrast

---

## Basic Settings

### Slide Size (16:9 Default)
```html
<body style="width: 720pt; height: 405pt;">
```

### Supported Ratios
| Ratio | Size | Use Case |
|-------|------|----------|
| 16:9 | 720pt x 405pt | Default, monitors/screens |
| 4:3 | 720pt x 540pt | Legacy projectors |
| 16:10 | 720pt x 450pt | MacBook |

### Default Font Stack
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Pretendard Web Font CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
```

---

## Typography System

### Font Size Scale
| Purpose | Size | Weight | Example Usage |
|---------|------|--------|---------------|
| Hero Title | 72-96pt | 700-800 | Cover main title |
| Section Title | 48-60pt | 700 | Section divider title |
| Slide Title | 32-40pt | 600-700 | Slide title |
| Subtitle | 20-24pt | 500 | Subtitle, description |
| Body | 16-20pt | 400 | Body text |
| Caption | 12-14pt | 400 | Captions, sources |
| Label | 10-12pt | 500-600 | Badges, tags |

### Letter Spacing
```css
/* Large titles: tight */
letter-spacing: -0.02em;

/* Medium titles */
letter-spacing: -0.01em;

/* Body: default */
letter-spacing: 0;

/* Captions, labels: slightly wide */
letter-spacing: 0.02em;
```

### Line Height
```css
/* Titles */
line-height: 1.2;

/* Body */
line-height: 1.6 - 1.8;

/* Single line text */
line-height: 1;
```

---

## Color Palette System

### 1. Executive Minimal (Default Recommended)
For sophisticated business presentations
```css
--bg-primary: #f5f5f0;      /* Warm white background */
--bg-secondary: #e8e8e3;    /* Sub background */
--bg-dark: #1a1a1a;         /* Dark background */
--text-primary: #1a1a1a;    /* Main text */
--text-secondary: #666666;  /* Secondary text */
--text-light: #999999;      /* Subtle text */
--accent: #1a1a1a;          /* Accent (black) */
--border: #d4d4d0;          /* Border */
```

### 2. Sage Professional
Calm and trustworthy tone
```css
--bg-primary: #b8c4b8;      /* Sage green background */
--bg-secondary: #a3b0a3;    /* Deep sage */
--bg-light: #f8faf8;        /* Light background */
--text-primary: #1a1a1a;    /* Main text */
--text-secondary: #3d3d3d;  /* Secondary text */
--accent: #2d2d2d;          /* Accent */
--border: #9aa89a;          /* Border */
```

### 3. Modern Dark
Impactful dark theme
```css
--bg-primary: #0f0f0f;      /* Pure dark */
--bg-secondary: #1a1a1a;    /* Card background */
--bg-elevated: #252525;     /* Elevated area */
--text-primary: #ffffff;    /* Main text */
--text-secondary: #b0b0b0;  /* Secondary text */
--accent: #ffffff;          /* Accent (white) */
--border: #333333;          /* Border */
```

### 4. Corporate Blue
Traditional business tone
```css
--bg-primary: #ffffff;      /* White background */
--bg-secondary: #f7f9fc;    /* Light blue gray */
--text-primary: #1e2a3a;    /* Dark navy */
--text-secondary: #5a6b7d;  /* Blue gray */
--accent: #2563eb;          /* Blue accent */
--border: #e2e8f0;          /* Border */
```

### 5. Warm Neutral
Warm and friendly tone
```css
--bg-primary: #faf8f5;      /* Cream white */
--bg-secondary: #f0ebe3;    /* Warm beige */
--text-primary: #2d2a26;    /* Dark brown */
--text-secondary: #6b6560;  /* Medium brown */
--accent: #c45a3b;          /* Terracotta */
--border: #ddd8d0;          /* Border */
```

---

## Layout System

### Spacing Standards (padding/margin)
```css
/* Slide overall margin */
padding: 48pt;

/* Section gap */
gap: 32pt;

/* Element gap */
gap: 16pt;

/* Text block gap */
gap: 8pt;
```

### Grid System
```css
/* 2-column layout */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32pt;

/* 3-column layout */
grid-template-columns: repeat(3, 1fr);

/* Asymmetric layout (40:60) */
grid-template-columns: 2fr 3fr;

/* Asymmetric layout (30:70) */
grid-template-columns: 1fr 2.3fr;
```

---

## Design Components

### 1. Badge/Tag
```html
<p style="
  display: inline-block;
  padding: 6pt 14pt;
  border: 1px solid #1a1a1a;
  border-radius: 20pt;
  font-size: 10pt;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
">PRESENTATION</p>
```

### 2. Section Number
```html
<p style="
  display: inline-block;
  padding: 4pt 12pt;
  background: #1a1a1a;
  color: #ffffff;
  border-radius: 4pt;
  font-size: 10pt;
  font-weight: 600;
">SECTION 1</p>
```

### 3. Logo Area
```html
<div style="display: flex; align-items: center; gap: 8pt;">
  <div style="
    width: 20pt;
    height: 20pt;
    background: #1a1a1a;
    border-radius: 4pt;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <p style="color: #fff; font-size: 12pt;">*</p>
  </div>
  <p style="font-size: 12pt; font-weight: 600;">LogoName</p>
</div>
```

### 4. Icon Button
```html
<div style="
  width: 32pt;
  height: 32pt;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
">
  <p style="font-size: 14pt;">↗</p>
</div>
```

### 5. Divider
```html
<div style="
  width: 100%;
  height: 1pt;
  background: #d4d4d0;
"></div>
```

### 6. Info Grid
```html
<div style="display: flex; gap: 48pt;">
  <div>
    <p style="font-size: 10pt; color: #999; margin-bottom: 4pt;">Contact</p>
    <p style="font-size: 12pt; font-weight: 500;">334556774</p>
  </div>
  <div>
    <p style="font-size: 10pt; color: #999; margin-bottom: 4pt;">Date</p>
    <p style="font-size: 12pt; font-weight: 500;">March 2025</p>
  </div>
</div>
```

---

## Slide Templates

### 1. Cover Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #f5f5f0;
      padding: 32pt 48pt;
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 16pt;">
      <div style="display: flex; align-items: center; gap: 8pt;">
        <div style="width: 18pt; height: 18pt; background: #1a1a1a; border-radius: 3pt; display: flex; align-items: center; justify-content: center;">
          <p style="color: #fff; font-size: 10pt;">*</p>
        </div>
        <p style="font-size: 11pt; font-weight: 600; color: #1a1a1a;">LogoName</p>
      </div>
      <p style="display: inline-block; padding: 4pt 10pt; border: 1px solid #1a1a1a; border-radius: 12pt; font-size: 9pt; font-weight: 500;">PRESENTATION</p>
    </div>
    <div style="display: flex; align-items: center; gap: 8pt;">
      <p style="display: inline-block; padding: 4pt 10pt; border: 1px solid #1a1a1a; border-radius: 12pt; font-size: 9pt; font-weight: 500;">OUR PROJECT</p>
      <div style="width: 28pt; height: 28pt; border: 1px solid #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <p style="font-size: 12pt; color: #1a1a1a;">↘</p>
      </div>
    </div>
  </div>

  <!-- Main Title -->
  <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
    <h1 style="font-size: 72pt; font-weight: 500; color: #1a1a1a; letter-spacing: -0.02em; line-height: 1.1;">
      Business Deck
    </h1>
    <p style="font-size: 14pt; color: #666; margin-top: 24pt;">
      <span style="color: #999;">Presented by</span>  <span style="font-weight: 500; color: #1a1a1a;">Luna Martinez</span>
    </p>
  </div>

  <!-- Footer Info -->
  <div style="display: flex; gap: 64pt;">
    <div>
      <p style="font-size: 9pt; color: #999; margin-bottom: 4pt;">Contact</p>
      <p style="font-size: 11pt; font-weight: 500; color: #1a1a1a;">334556774</p>
    </div>
    <div>
      <p style="font-size: 9pt; color: #999; margin-bottom: 4pt;">Date</p>
      <p style="font-size: 11pt; font-weight: 500; color: #1a1a1a;">March 2025</p>
    </div>
    <div>
      <p style="font-size: 9pt; color: #999; margin-bottom: 4pt;">Website</p>
      <p style="font-size: 11pt; font-weight: 500; color: #1a1a1a;">www.yourwebsite.com</p>
    </div>
  </div>
</body>
</html>
```

### 2. Contents Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #b8c4b8;
      padding: 48pt;
      display: grid;
      grid-template-columns: 1fr 1.8fr;
      gap: 48pt;
    }
  </style>
</head>
<body>
  <!-- Left: Title -->
  <div style="display: flex; flex-direction: column; justify-content: flex-end;">
    <p style="font-size: 9pt; color: #3d3d3d; margin-bottom: 16pt;">©2025 YOUR BRAND. ALL RIGHTS RESERVED.</p>
    <h1 style="font-size: 56pt; font-weight: 500; color: #1a1a1a; letter-spacing: -0.02em; line-height: 1.1;">
      Our<br>Contents
    </h1>
    <div style="width: 32pt; height: 32pt; border: 1px solid #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 24pt;">
      <p style="font-size: 14pt; color: #1a1a1a;">↗</p>
    </div>
  </div>

  <!-- Right: Contents List -->
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 16pt;">
    <div style="display: flex; align-items: center; gap: 16pt; padding: 12pt 0; border-bottom: 1px solid rgba(0,0,0,0.1);">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 1</p>
      <p style="flex: 1; font-size: 14pt; font-weight: 500; color: #1a1a1a;">SECTION TITLE</p>
      <p style="font-size: 14pt; color: #666;">(1)</p>
    </div>
    <div style="display: flex; align-items: center; gap: 16pt; padding: 12pt 0; border-bottom: 1px solid rgba(0,0,0,0.1);">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 2</p>
      <p style="flex: 1; font-size: 14pt; font-weight: 500; color: #1a1a1a;">SECTION TITLE</p>
      <p style="font-size: 14pt; color: #666;">(2)</p>
    </div>
    <div style="display: flex; align-items: center; gap: 16pt; padding: 12pt 0; border-bottom: 1px solid rgba(0,0,0,0.1);">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 3</p>
      <p style="flex: 1; font-size: 14pt; font-weight: 500; color: #1a1a1a;">SECTION TITLE</p>
      <p style="font-size: 14pt; color: #666;">(3)</p>
    </div>
    <div style="display: flex; align-items: center; gap: 16pt; padding: 12pt 0; border-bottom: 1px solid rgba(0,0,0,0.1);">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 4</p>
      <p style="flex: 1; font-size: 14pt; font-weight: 500; color: #1a1a1a;">SECTION TITLE</p>
      <p style="font-size: 14pt; color: #666;">(4)</p>
    </div>
    <div style="display: flex; align-items: center; gap: 16pt; padding: 12pt 0;">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 5</p>
      <p style="flex: 1; font-size: 14pt; font-weight: 500; color: #1a1a1a;">SECTION TITLE</p>
      <p style="font-size: 14pt; color: #666;">(5)</p>
    </div>
  </div>
</body>
</html>
```

### 3. Section Divider Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #1a1a1a;
      padding: 48pt;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <!-- Top Section Info -->
  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
    <div>
      <p style="display: inline-block; padding: 4pt 10pt; background: #fff; color: #1a1a1a; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 1</p>
    </div>
    <p style="font-size: 9pt; color: #666;">©2025 YOUR BRAND</p>
  </div>

  <!-- Main Title -->
  <div>
    <h1 style="font-size: 64pt; font-weight: 500; color: #ffffff; letter-spacing: -0.02em; line-height: 1.1;">
      Introduction
    </h1>
    <p style="font-size: 16pt; color: #888; margin-top: 16pt; max-width: 400pt; line-height: 1.6;">
      Brief description of what this section covers and why it matters.
    </p>
  </div>

  <!-- Page Number -->
  <div style="display: flex; justify-content: flex-end;">
    <p style="font-size: 10pt; color: #666;">01</p>
  </div>
</body>
</html>
```

### 4. Content Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #ffffff;
      padding: 40pt 48pt;
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32pt;">
    <div style="display: flex; align-items: center; gap: 12pt;">
      <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600;">SECTION 1</p>
      <h2 style="font-size: 24pt; font-weight: 600; color: #1a1a1a;">Main Topic</h2>
    </div>
    <p style="font-size: 10pt; color: #999;">02</p>
  </div>

  <!-- Content Area -->
  <div style="flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 32pt;">
    <div>
      <h3 style="font-size: 18pt; font-weight: 600; color: #1a1a1a; margin-bottom: 16pt;">Key Point One</h3>
      <p style="font-size: 13pt; color: #666; line-height: 1.7;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </p>
    </div>
    <div>
      <h3 style="font-size: 18pt; font-weight: 600; color: #1a1a1a; margin-bottom: 16pt;">Key Point Two</h3>
      <p style="font-size: 13pt; color: #666; line-height: 1.7;">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16pt; border-top: 1px solid #eee;">
    <p style="font-size: 9pt; color: #999;">www.yourwebsite.com</p>
    <p style="font-size: 9pt; color: #999;">©2025 YOUR BRAND</p>
  </div>
</body>
</html>
```

### 5. Statistics/Data Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #f5f5f0;
      padding: 40pt 48pt;
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32pt;">
    <h2 style="font-size: 28pt; font-weight: 600; color: #1a1a1a;">Key Metrics</h2>
    <p style="font-size: 10pt; color: #999;">03</p>
  </div>

  <!-- Statistics Card Grid -->
  <div style="flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24pt;">
    <div style="background: #1a1a1a; border-radius: 12pt; padding: 28pt; display: flex; flex-direction: column; justify-content: space-between;">
      <p style="font-size: 10pt; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Revenue Growth</p>
      <div>
        <p style="font-size: 48pt; font-weight: 600; color: #ffffff; letter-spacing: -0.02em;">85%</p>
        <p style="font-size: 11pt; color: #666; margin-top: 8pt;">Year over year</p>
      </div>
    </div>
    <div style="background: #ffffff; border-radius: 12pt; padding: 28pt; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid #e5e5e0;">
      <p style="font-size: 10pt; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Active Users</p>
      <div>
        <p style="font-size: 48pt; font-weight: 600; color: #1a1a1a; letter-spacing: -0.02em;">2.4M</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt;">+340K this quarter</p>
      </div>
    </div>
    <div style="background: #ffffff; border-radius: 12pt; padding: 28pt; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid #e5e5e0;">
      <p style="font-size: 10pt; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Customer Satisfaction</p>
      <div>
        <p style="font-size: 48pt; font-weight: 600; color: #1a1a1a; letter-spacing: -0.02em;">4.9</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt;">Out of 5.0 rating</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="display: flex; justify-content: flex-end; padding-top: 16pt;">
    <p style="font-size: 9pt; color: #999;">Source: Internal Analytics 2025</p>
  </div>
</body>
</html>
```

### 6. Image + Text Slide (Split Layout)
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  </style>
</head>
<body>
  <!-- Image Area -->
  <div style="background: #e5e5e0; display: flex; align-items: center; justify-content: center; position: relative;">
    <div data-image-placeholder style="width: 100%; height: 100%; background: linear-gradient(135deg, #d0d0c8 0%, #b8b8b0 100%);"></div>
    <p style="position: absolute; bottom: 16pt; left: 16pt; font-size: 9pt; color: #666;">©2025 YOUR BRAND</p>
  </div>

  <!-- Text Area -->
  <div style="padding: 48pt; display: flex; flex-direction: column; justify-content: center;">
    <p style="display: inline-block; padding: 4pt 10pt; background: #1a1a1a; color: #fff; border-radius: 4pt; font-size: 8pt; font-weight: 600; margin-bottom: 24pt; align-self: flex-start;">FEATURE</p>
    <h2 style="font-size: 32pt; font-weight: 600; color: #1a1a1a; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 20pt;">
      Transform Your Business
    </h2>
    <p style="font-size: 14pt; color: #666; line-height: 1.7;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div style="margin-top: 32pt; display: flex; align-items: center; gap: 12pt;">
      <p style="font-size: 12pt; font-weight: 500; color: #1a1a1a;">Learn more</p>
      <div style="width: 28pt; height: 28pt; border: 1px solid #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <p style="font-size: 12pt; color: #1a1a1a;">→</p>
      </div>
    </div>
  </div>
</body>
</html>
```

### 7. Team Introduction Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #f5f5f0;
      padding: 40pt 48pt;
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32pt;">
    <h2 style="font-size: 28pt; font-weight: 600; color: #1a1a1a;">Our Team</h2>
    <p style="font-size: 10pt; color: #999;">05</p>
  </div>

  <!-- Team Grid -->
  <div style="flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20pt;">
    <div style="text-align: center;">
      <div style="width: 100%; aspect-ratio: 1; background: #d0d0c8; border-radius: 8pt; margin-bottom: 12pt;"></div>
      <p style="font-size: 13pt; font-weight: 600; color: #1a1a1a;">John Smith</p>
      <p style="font-size: 10pt; color: #888; margin-top: 4pt;">CEO & Founder</p>
    </div>
    <div style="text-align: center;">
      <div style="width: 100%; aspect-ratio: 1; background: #d0d0c8; border-radius: 8pt; margin-bottom: 12pt;"></div>
      <p style="font-size: 13pt; font-weight: 600; color: #1a1a1a;">Sarah Johnson</p>
      <p style="font-size: 10pt; color: #888; margin-top: 4pt;">CTO</p>
    </div>
    <div style="text-align: center;">
      <div style="width: 100%; aspect-ratio: 1; background: #d0d0c8; border-radius: 8pt; margin-bottom: 12pt;"></div>
      <p style="font-size: 13pt; font-weight: 600; color: #1a1a1a;">Mike Chen</p>
      <p style="font-size: 10pt; color: #888; margin-top: 4pt;">Design Lead</p>
    </div>
    <div style="text-align: center;">
      <div style="width: 100%; aspect-ratio: 1; background: #d0d0c8; border-radius: 8pt; margin-bottom: 12pt;"></div>
      <p style="font-size: 13pt; font-weight: 600; color: #1a1a1a;">Emily Davis</p>
      <p style="font-size: 10pt; color: #888; margin-top: 4pt;">Marketing</p>
    </div>
  </div>
</body>
</html>
```

### 8. Quote Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #1a1a1a;
      padding: 64pt;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  </style>
</head>
<body>
  <p style="font-size: 48pt; color: #444; margin-bottom: 24pt;">"</p>
  <h2 style="font-size: 28pt; font-weight: 400; color: #ffffff; letter-spacing: -0.01em; line-height: 1.5; max-width: 540pt;">
    The best way to predict the future is to create it.
  </h2>
  <div style="margin-top: 40pt;">
    <p style="font-size: 13pt; font-weight: 500; color: #ffffff;">Peter Drucker</p>
    <p style="font-size: 11pt; color: #666; margin-top: 4pt;">Management Consultant</p>
  </div>
</body>
</html>
```

### 9. Timeline Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #ffffff;
      padding: 40pt 48pt;
      display: flex;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="margin-bottom: 32pt;">
    <h2 style="font-size: 28pt; font-weight: 600; color: #1a1a1a;">Our Journey</h2>
  </div>

  <!-- Timeline -->
  <div style="flex: 1; display: flex; align-items: center;">
    <div style="display: flex; width: 100%; justify-content: space-between; position: relative;">
      <!-- Connecting Line -->
      <div style="position: absolute; top: 12pt; left: 40pt; right: 40pt; height: 2pt; background: #e5e5e0;"></div>

      <!-- Timeline Items -->
      <div style="text-align: center; z-index: 1;">
        <div style="width: 24pt; height: 24pt; background: #1a1a1a; border-radius: 50%; margin: 0 auto 16pt;"></div>
        <p style="font-size: 18pt; font-weight: 600; color: #1a1a1a;">2020</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt; max-width: 100pt;">Company Founded</p>
      </div>
      <div style="text-align: center; z-index: 1;">
        <div style="width: 24pt; height: 24pt; background: #1a1a1a; border-radius: 50%; margin: 0 auto 16pt;"></div>
        <p style="font-size: 18pt; font-weight: 600; color: #1a1a1a;">2021</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt; max-width: 100pt;">First Product Launch</p>
      </div>
      <div style="text-align: center; z-index: 1;">
        <div style="width: 24pt; height: 24pt; background: #1a1a1a; border-radius: 50%; margin: 0 auto 16pt;"></div>
        <p style="font-size: 18pt; font-weight: 600; color: #1a1a1a;">2023</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt; max-width: 100pt;">Series A Funding</p>
      </div>
      <div style="text-align: center; z-index: 1;">
        <div style="width: 24pt; height: 24pt; background: #1a1a1a; border-radius: 50%; margin: 0 auto 16pt;"></div>
        <p style="font-size: 18pt; font-weight: 600; color: #1a1a1a;">2025</p>
        <p style="font-size: 11pt; color: #888; margin-top: 8pt; max-width: 100pt;">Global Expansion</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="display: flex; justify-content: flex-end; padding-top: 16pt;">
    <p style="font-size: 10pt; color: #999;">06</p>
  </div>
</body>
</html>
```

### 10. Closing Slide
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #1a1a1a;
      padding: 48pt;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <!-- Logo -->
  <div style="display: flex; align-items: center; gap: 8pt;">
    <div style="width: 20pt; height: 20pt; background: #fff; border-radius: 4pt; display: flex; align-items: center; justify-content: center;">
      <p style="color: #1a1a1a; font-size: 12pt;">*</p>
    </div>
    <p style="font-size: 12pt; font-weight: 600; color: #ffffff;">LogoName</p>
  </div>

  <!-- Main Message -->
  <div>
    <h1 style="font-size: 56pt; font-weight: 500; color: #ffffff; letter-spacing: -0.02em; line-height: 1.1;">
      Thank You
    </h1>
    <p style="font-size: 16pt; color: #888; margin-top: 16pt;">
      Questions? Let's discuss.
    </p>
  </div>

  <!-- Contact Info -->
  <div style="display: flex; gap: 64pt;">
    <div>
      <p style="font-size: 9pt; color: #666; margin-bottom: 4pt;">Email</p>
      <p style="font-size: 12pt; font-weight: 500; color: #ffffff;">hello@company.com</p>
    </div>
    <div>
      <p style="font-size: 9pt; color: #666; margin-bottom: 4pt;">Phone</p>
      <p style="font-size: 12pt; font-weight: 500; color: #ffffff;">+82 10-1234-5678</p>
    </div>
    <div>
      <p style="font-size: 9pt; color: #666; margin-bottom: 4pt;">Website</p>
      <p style="font-size: 12pt; font-weight: 500; color: #ffffff;">www.company.com</p>
    </div>
  </div>
</body>
</html>
```

---

## Advanced Design Patterns

### Asymmetric Layout
Eye-catching unique composition
```css
/* Golden ratio based */
grid-template-columns: 1fr 1.618fr;

/* Extreme asymmetry */
grid-template-columns: 1fr 3fr;
```

### Overlay Text
Placing text over images
```html
<div style="position: relative;">
  <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>
  <div style="position: relative; z-index: 1;">
    <h2 style="color: #fff;">Overlay Text</h2>
  </div>
</div>
```

### Gradient Overlay
```html
<div style="
  background: linear-gradient(to right, #1a1a1a 0%, transparent 60%);
  position: absolute;
  inset: 0;
"></div>
```

### Card Style
```html
<div style="
  background: #ffffff;
  border-radius: 12pt;
  padding: 24pt;
  box-shadow: 0 2pt 8pt rgba(0,0,0,0.08);
"></div>
```

---

## Text Usage Rules

### Required Tags
```html
<!-- All text must be inside these tags -->
<p>, <h1>-<h6>, <ul>, <ol>, <li>

<!-- Prohibited - ignored in PowerPoint -->
<div>text</div>
<span>text</span>
```

### Recommended Usage
```html
<!-- Good example -->
<h1 style="...">Title</h1>
<p style="...">Body text</p>

<!-- Bad example -->
<div style="...">Direct text input</div>
```

---

## Output and File Structure

### File Saving Rules
```
slides/
├── slide-01.html  (Cover)
├── slide-02.html  (Contents)
├── slide-03.html  (Section divider)
├── slide-04.html  (Content)
├── ...
└── slide-XX.html  (Closing)
```

### File Naming Rules
- Use 2-digit numbers: `slide-01.html`, `slide-02.html`
- Name sequentially
- No special characters or spaces

---

## Workflow

1. **Analysis**: Read `slide-outline.md` and understand content
2. **Theme Decision**: Choose color palette and overall mood
3. **Structure Design**: Determine layout type for each slide
4. **Design Execution**: Generate HTML for each slide
5. **Consistency Review**: Verify unity across the entire presentation
6. **Save**: Save files to `slides/` directory

---

## Important Notes

1. **CSS Gradients**: Not supported in PowerPoint conversion - use background images instead
2. **Web Fonts**: Always include Pretendard CDN link
3. **Image Paths**: Use absolute paths or URLs
4. **Compatibility**: Include # in all color values
5. **Text Rules**: No direct text in div/span elements
