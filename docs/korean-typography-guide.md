# Korean Typography Guide for PowerPoint Presentations

## Overview

This guide provides comprehensive guidelines for creating Korean (Hangul) text in HTML slides that convert well to PowerPoint format.

---

## 1. Typography Principles

### 1.1 Line Height (행간)

CJK (Chinese, Japanese, Korean) text requires more generous line spacing than Latin text for optimal readability.

| Text Type | Latin | Korean | Reason |
|-----------|-------|--------|--------|
| Hero Title (40pt+) | 1.1 | 1.2-1.3 | Hangul needs breathing room |
| Section Title (24-40pt) | 1.2 | 1.3-1.4 | Prevent cramped appearance |
| Body Text (12-20pt) | 1.5-1.6 | 1.7-1.9 | CJK standard for readability |
| Caption (8-12pt) | 1.4 | 1.5-1.6 | Small text needs more spacing |

**CSS Example:**
```css
/* Korean body text */
p {
  line-height: 1.7;
}

/* Korean titles */
h1, h2, h3 {
  line-height: 1.3;
}
```

### 1.2 Character Spacing (자간)

Korean text typically looks better with tighter letter spacing than Latin defaults.

| Usage | Letter Spacing | CSS Value |
|-------|---------------|-----------|
| Hero titles | Very tight | `-0.03em` |
| Section titles | Tight | `-0.02em` |
| Body text | Slightly tight | `-0.01em` |
| Captions | Normal to slightly wide | `0` to `0.02em` |

**CSS Example:**
```css
/* Korean body text */
p {
  letter-spacing: -0.01em;
}

/* Korean titles */
h1 {
  letter-spacing: -0.02em;
}
```

### 1.3 Word Breaking

**CRITICAL:** Always use `word-break: keep-all` for Korean text to prevent breaking in the middle of words.

```css
/* Required for all Korean text containers */
.korean-text {
  word-break: keep-all;
}
```

**Why this matters:**
- Korean words should break between words (at spaces), not within syllables
- Without `keep-all`, browsers may break `대한민국` as `대한민` / `국`
- With `keep-all`, the entire word stays together

---

## 2. Character Width Reference

Korean characters (Hangul) are approximately 10-15% wider than Latin characters at the same point size. Bold Korean text adds an additional 5% width.

### 2.1 Maximum Characters per Line

| Container Width | Title (24pt) | Body (14pt) | Caption (10pt) |
|----------------|-------------|-------------|----------------|
| 150pt | 5-6자 | 9-11자 | 13-15자 |
| 200pt | 7-8자 | 12-14자 | 18-20자 |
| 250pt | 9-10자 | 15-18자 | 22-25자 |
| 300pt | 11-12자 | 18-21자 | 27-30자 |
| 350pt | 13-14자 | 22-25자 | 31-35자 |
| 400pt | 15-17자 | 25-29자 | 36-40자 |
| 450pt | 17-19자 | 28-32자 | 40-45자 |
| 500pt | 19-21자 | 32-36자 | 45-50자 |
| 550pt | 21-23자 | 35-40자 | 50-55자 |
| 600pt | 23-25자 | 38-43자 | 54-60자 |

### 2.2 Calculation Formula

```
max_korean_chars = container_width_pt / (font_size_pt * 1.1)
```

For bold text:
```
max_korean_chars_bold = container_width_pt / (font_size_pt * 1.15)
```

---

## 3. Layout Patterns for Korean

### 3.1 Grid Layouts

**Maximum columns for Korean text content:**
- **2-3 columns:** Safe for all Korean text
- **4 columns:** Acceptable for short text (titles, labels)
- **5+ columns:** Avoid for Korean text (too cramped)

**Recommended grid configurations:**
```css
/* 2-column: Safe for Korean body text */
grid-template-columns: 1fr 1fr;

/* 3-column: Good for cards with short Korean text */
grid-template-columns: repeat(3, 1fr);

/* 4-column: Only for labels/icons with minimal Korean */
grid-template-columns: repeat(4, 1fr);

/* AVOID for Korean */
grid-template-columns: repeat(5, 1fr);  /* Too cramped */
```

### 3.2 Card Layouts

For Korean content cards:
```css
.korean-card {
  padding: 16pt;           /* Minimum 12pt for Korean */
  gap: 12pt;               /* Minimum 10pt between elements */
  word-break: keep-all;
}
```

### 3.3 Split Layouts

For 50:50 or asymmetric layouts with Korean:
```css
/* Left: Text | Right: Image */
grid-template-columns: 1fr 1fr;

/* More space for Korean text */
grid-template-columns: 1.2fr 1fr;

/* Golden ratio for Korean-heavy slides */
grid-template-columns: 1.618fr 1fr;
```

---

## 4. Common Issues and Solutions

### 4.1 Text Overflow

**Problem:** Korean text overflows its container in PPTX.

**Solutions:**
1. Reduce character count by 10-15%
2. Use smaller font size (recommended over truncation)
3. Increase container width
4. Use manual line breaks with `<br>`

**Example fix:**
```html
<!-- Before: May overflow -->
<p style="font-size: 14pt;">회사 소개 프레젠테이션 자료입니다</p>

<!-- After: Better fit -->
<p style="font-size: 14pt;">회사 소개<br>프레젠테이션 자료입니다</p>
```

### 4.2 Bold Text Width Issues

**Problem:** Bold Korean text is wider than expected.

**Solution:** When using bold for Korean:
- Reduce character count by 5%
- Or increase container width by 5%

```html
<!-- Account for bold width expansion -->
<p style="font-size: 18pt; font-weight: 700; width: 315pt;">  <!-- 300pt * 1.05 -->
  강조된 텍스트
</p>
```

### 4.3 Line Breaking Issues

**Problem:** Words break in the middle.

**Solution:** Always apply `word-break: keep-all`:
```html
<div style="word-break: keep-all;">
  <p>한글 텍스트는 단어 단위로 줄바꿈됩니다.</p>
</div>
```

### 4.4 Cramped Multi-column Layouts

**Problem:** 5-column grid looks cramped with Korean.

**Solution:** Reduce to 4 columns or use 2 rows:
```html
<!-- Instead of 5 columns -->
<!-- Use 2 rows x 3 columns -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, auto); gap: 16pt;">
```

---

## 5. CSS Requirements Summary

### 5.1 Essential CSS for Korean

```css
/* Base Korean text styling */
.korean-text {
  word-break: keep-all;         /* Required */
  line-height: 1.7;             /* CJK recommendation */
  letter-spacing: -0.01em;      /* Tighter spacing */
}

/* Korean titles */
.korean-title {
  word-break: keep-all;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

/* Korean body */
.korean-body {
  word-break: keep-all;
  line-height: 1.7;
  letter-spacing: -0.01em;
  font-size: 14pt;              /* Minimum 10pt */
}
```

### 5.2 Complete Slide Template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 720pt;
      height: 405pt;
      font-family: 'Pretendard', sans-serif;
      background: #0a0a0a;
      padding: 40pt 48pt;
    }
    /* Korean text base */
    p, h1, h2, h3, h4, h5, h6 {
      word-break: keep-all;
    }
  </style>
</head>
<body>
  <div style="word-break: keep-all;">
    <h1 style="font-size: 44pt; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; line-height: 1.3;">
      한글 제목
    </h1>
    <p style="font-size: 16pt; color: #888; line-height: 1.7; margin-top: 20pt; letter-spacing: -0.01em;">
      한글 본문 텍스트입니다. 적절한 행간과 자간을 설정하면 가독성이 크게 향상됩니다.
    </p>
  </div>
</body>
</html>
```

---

## 6. Testing Checklist

Before converting HTML to PPTX, verify:

### Typography
- [ ] `word-break: keep-all` applied to all Korean text containers
- [ ] Line height is 1.7+ for body text
- [ ] Line height is 1.3+ for titles
- [ ] Letter spacing is `-0.01em` to `-0.02em`

### Layout
- [ ] Maximum 4 columns for text grids (3 preferred)
- [ ] Minimum font size is 10pt
- [ ] Card padding is at least 12pt
- [ ] Hero titles are 64pt or smaller

### Content
- [ ] Character counts are within limits for container width
- [ ] Bold text has 5% extra width allowance
- [ ] Manual `<br>` tags added where needed for long phrases

### Conversion
- [ ] Run `node convert.js` and check for warnings
- [ ] Open PPTX and verify no text overflow
- [ ] Verify fonts rendered correctly (Malgun Gothic)

---

## 7. Font Mapping Reference

| Web Font (HTML) | PowerPoint Font | Notes |
|-----------------|-----------------|-------|
| Pretendard | Malgun Gothic | Korean system font |
| Pretendard Variable | Malgun Gothic | Same mapping |
| Noto Sans KR | Malgun Gothic | Same mapping |
| Nanum Gothic | Malgun Gothic | Same mapping |
| Spoqa Han Sans | Malgun Gothic | Same mapping |
| Spoqa Han Sans Neo | Malgun Gothic | Same mapping |

**Note:** Malgun Gothic (맑은 고딕) is the default Korean font on Windows and is used for all Korean web fonts when converting to PowerPoint.

---

## 8. References

- [W3C Requirements for Hangul Text Layout](https://www.w3.org/TR/klreq/)
- [Morisawa Hangeul Typography Guide](https://www.morisawa-usa.com/post/hangeul-typogarphy-guide)
- [Typotheque CJK Typesetting](https://www.typotheque.com/articles/typesetting-cjk-text)

---

*Last updated: 2025-12-31*
