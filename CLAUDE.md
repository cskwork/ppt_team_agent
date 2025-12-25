# PPT Team Agent - 프로젝트 규칙

## 슬라이드 디자인 프로세스

### 1. 이미지 소싱 규칙

**Unsplash 무료 이미지 필수 사용**

모든 슬라이드에는 컨셉에 맞는 Unsplash 무료 이미지를 적용한다.

```
이미지 URL 형식:
https://images.unsplash.com/photo-{ID}?w={width}&q={quality}

권장 설정:
- 배경 이미지: w=1400, q=80
- 분할 레이아웃: w=800, q=80
- 썸네일: w=400, q=80
```

### 2. 이미지 검색 프로세스

1. **키워드 선정**: 슬라이드 컨셉에 맞는 영문 키워드 도출
2. **Unsplash 검색**: `https://unsplash.com/s/photos/{keyword}` 페이지 접근
3. **이미지 URL 추출**: WebFetch로 직접 이미지 URL 확보
4. **슬라이드 적용**: 적절한 opacity와 overlay로 텍스트 가독성 확보

### 3. 슬라이드별 이미지 매칭 가이드

| 슬라이드 유형 | 추천 검색 키워드 |
|-------------|----------------|
| 인트로/표지 | technology, abstract, gradient, minimal |
| 문제점 제시 | warning, alert, obstacle, challenge |
| 보안 관련 | security, lock, cyber, protection |
| 해결책 | solution, success, teamwork, tools |
| 데이터/통계 | chart, analytics, growth, metrics |
| 전환점 | crossroad, decision, path, journey |
| 마무리 | handshake, thank you, celebration |

### 4. 이미지 스타일링 규칙

**다크 테마 배경 이미지**
```html
<img src="{URL}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.2-0.35;">
<div style="position: absolute; inset: 0; background: linear-gradient(...);">
```

**분할 레이아웃 이미지**
```html
<img src="{URL}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7-0.8;">
<div style="position: absolute; inset: 0; background: linear-gradient(to right, transparent 60%, #0a0a0a 100%);">
```

### 5. 저작권 표시

Unsplash 이미지는 저작권 표시가 필수는 아니지만, 선택적으로 표시 가능:
```html
<p style="font-size: 9pt; color: rgba(255,255,255,0.5);">Photo by Unsplash</p>
```

---

## 슬라이드 제작 워크플로우

### Phase 1: 콘텐츠 분석
1. 사용자 요청 내용 파악
2. 슬라이드 구성 및 개수 결정
3. 각 슬라이드별 핵심 메시지 정리

### Phase 2: 디자인 스킬 실행
1. `/design-skill` 호출
2. 디자인 가이드라인에 따라 HTML 슬라이드 생성
3. `slides/` 폴더에 `slide-XX.html` 형식으로 저장

### Phase 3: 이미지 적용
1. 각 슬라이드 컨셉에 맞는 키워드 선정
2. Unsplash에서 이미지 검색 및 URL 확보
3. 슬라이드에 이미지 삽입 및 스타일링
4. 가독성 확인 (overlay, opacity 조정)

### Phase 4: 최종 변환 (선택)
1. `/pptx-skill` 호출하여 PPTX 변환
2. 최종 파일 전달

---

## 디자인 시스템

### 색상 팔레트 (다크 테마 기본)

```css
--bg-primary: #0a0a0a;
--bg-secondary: #1a1a1a;
--text-primary: #ffffff;
--text-secondary: #888888;

/* 문제점 강조색 */
--problem-red: #ef4444;
--problem-orange: #f97316;
--problem-yellow: #eab308;

/* 해결책 강조색 */
--solution-green: #22c55e;
--solution-blue: #3b82f6;
--solution-purple: #a855f7;

/* 전환점/강조 */
--accent-indigo: #6366f1;
--accent-pink: #ec4899;
```

### 타이포그래피

```css
font-family: 'Pretendard', sans-serif;

/* Hero Title */
font-size: 42-72pt; font-weight: 800;

/* Section Title */
font-size: 24-32pt; font-weight: 700;

/* Body */
font-size: 12-16pt; font-weight: 400;

/* Caption */
font-size: 9-11pt; font-weight: 400-500;
```

### 레이아웃 패턴

- **전체 배경 이미지**: position: absolute + overlay gradient
- **50:50 분할**: grid-template-columns: 1fr 1fr
- **40:60 비대칭**: grid-template-columns: 1fr 1.1fr
- **카드 그리드**: grid-template-columns: repeat(N, 1fr)

---

## 파일 구조

```
ppt_team_agent/
├── CLAUDE.md           # 이 파일 (프로젝트 규칙)
├── slides/             # HTML 슬라이드 파일
│   ├── slide-01.html
│   ├── slide-02.html
│   └── ...
└── output/             # 변환된 PPTX 파일
```

---

## 주의사항

1. **이미지는 항상 Unsplash에서 가져온다** (저작권 안전)
2. **다크 테마 기본** - 전문적이고 트렌디한 느낌
3. **텍스트 가독성 우선** - 배경 이미지 opacity 조절 필수
4. **슬라이드 번호 일관성** - 2자리 숫자 형식 (01, 02, ...)
5. **반응형 고려 없음** - 고정 크기 720pt x 405pt (16:9)
6. **목차 슬라이드 필수** - 표지(slide-01) 다음에 반드시 목차(slide-02) 포함

---

## 필수 슬라이드 구조

프레젠테이션은 다음 구조를 따른다:

```
slide-01: 표지/흥미 유발
slide-02: 목차 (필수)
slide-03~: 본문 콘텐츠
```