# Changelog 2025-12-31

## Korean Typography Enhancement for PowerPoint Skill

한글 비즈니스 프레젠테이션을 위한 PowerPoint 스킬 개선.

### Added

- **html2pptx.js**: 한글 텍스트 너비 감지 함수 추가
  - `containsKorean()`: 한글 문자 포함 여부 감지
  - `getKoreanWidthMultiplier()`: 한글 텍스트 너비 배율 계산 (10-15%)
  - `extractTextContent()`: 텍스트 요소에서 내용 추출

- **SKILL.md**: Korean Typography 섹션 추가
  - 행간 (line-height) 가이드라인: 본문 1.7, 제목 1.3
  - 자간 (letter-spacing) 권장값: -0.01em ~ -0.03em
  - 글자 수 제한 테이블 (너비별 최대 글자 수)
  - `word-break: keep-all` 필수 사용 안내
  - 한글 슬라이드 템플릿 예시

- **CLAUDE.md**: 한글 텍스트 체크리스트 섹션 추가
  - CSS 필수 설정 (word-break, line-height, letter-spacing)
  - 글자 수 제한 가이드
  - Bold 텍스트 주의사항

- **docs/korean-typography-guide.md**: 종합 한글 타이포그래피 가이드 생성
  - 타이포그래피 원칙 (행간, 자간, 줄바꿈)
  - 글자 너비 참조 테이블
  - 레이아웃 패턴 (그리드, 카드, 분할)
  - 일반적인 문제 및 해결책
  - 테스트 체크리스트

- **validate-korean.js**: 한글 사전 검증 스크립트 생성
  - `word-break: keep-all` 적용 여부 확인
  - 행간 (line-height >= 1.5) 검사
  - 최소 폰트 크기 (10pt) 확인
  - 그리드 열 개수 확인 (최대 4열)
  - 글자 수 오버플로우 경고

- **convert.js**: 한글 검증 통합
  - PPTX 변환 전 자동 한글 검증 실행
  - 오류/경고 출력 후 변환 진행

### Fixed

- **slide-07.html**: CDN 오타 수정 (`pretendart` → `pretendard`)

### Changed

- **html2pptx.js**: 한글 텍스트 너비 조정 로직 개선
  - 기존 2% 고정 조정에서 한글 비율 기반 동적 조정으로 변경
  - 한글 텍스트: 최대 ~2.3% 추가 너비 (볼드 포함)
  - 볼드 한글: 추가 5% 너비 보정

---

## Files Modified

| File | Change Type |
|------|-------------|
| `.claude/skills/pptx-skill/scripts/html2pptx.js` | Modified |
| `.claude/skills/design-skill/SKILL.md` | Modified |
| `CLAUDE.md` | Modified |
| `slides/slide-07.html` | Fixed |
| `convert.js` | Modified |
| `.claude/skills/pptx-skill/scripts/validate-korean.js` | Created |
| `docs/korean-typography-guide.md` | Created |
