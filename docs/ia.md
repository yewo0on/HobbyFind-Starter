# IA — HobbyFind

## 1. 전체 사이트맵 구조 (Sitemap)

```
/
├─ Home (루트페이지)
│
├─ Sports        (/sports, 운동형)
├─ Intellectual  (/intellectual, 지능형)
└─ Art           (/art, 예술형)
```

* 로그인/마이페이지/설정 등 **비포함**
* 모든 페이지는 비로그인 접근 가능

---

## 2. 사용자 흐름 (User Flow)

### 기본 탐색 흐름

```
사용자 진입
 → 루트페이지(Home)
   → 전체 취미 카드 탐색
   → 카테고리 Select에서 선택
     → 선택한 카테고리 전용 페이지
       → 취미 카드 탐색
```

### 반복 탐색 흐름

```
카테고리 페이지
 → Top Bar 카테고리 Select에서 선택
   → 다른 카테고리 페이지 이동
```

* 페이지 간 이동은 **항상 Top Bar 기준**
* 뒤로가기 시 이전 탐색 상태 유지 (브라우저 기본)

---

## 3. 페이지 간 이동 흐름 (Navigation Structure)

### 글로벌 내비게이션 (Top Bar)

| 요소  | 기능                      |
| --- | ----------------------- |
| 로고  | 클릭 시 Home(`/`) 이동       |
| 카테고리 필터 | Select 드롭다운 형태로 카테고리 선택 |
|   - 운동형 | `/sports` 페이지로 이동     |
|   - 지능형 | `/intellectual` 페이지로 이동 |
|   - 예술형 | `/art` 페이지로 이동        |

* 모든 페이지에서 동일한 Top Bar 유지
* Select에서 카테고리 선택 시 **해당 카테고리 전용 페이지로 전환**
* 루트 페이지에서는 "카테고리"로 표시, 카테고리 페이지에서는 해당 카테고리명 표시

---

## 4. 페이지 계층 구조 (Page Hierarchy)

```
Level 1: Home (/)
  └─ Level 2: Category Page
        ├─ 운동형
        ├─ 지능형
        └─ 예술형
```

* **2 Depth 구조**
* 루트페이지 → 카테고리 전용 페이지

---

## 5. 페이지별 주요 콘텐츠 구성 (Content Organization)

### ① Home (루트페이지)

| 영역      | 구성 요소                      |
| ------- | -------------------------- |
| Top Bar | 로고 / 카테고리 Select 필터      |
| Hero    | 서비스 소개 문구                  |
| Main    | 전체 18종 취미 카드 그리드          |
| Guide   | 카테고리별로 탐색할 수 있음을 안내하는 짧은 텍스트 |

* Top Bar의 카테고리 버튼은 **해당 카테고리 전용 페이지로 이동하는 내비게이션 역할**
* Home 내부에서는 별도의 페이지 내 필터링 로직을 두지 않고, 각 카테고리 페이지로의 진입점 역할에 집중

---

### ② 카테고리 페이지 (공통 구조)

| 영역          | 구성 요소             |
| ----------- | ----------------- |
| Top Bar     | 로고 / 카테고리 Select 필터      |
| Hero 섹션   | 카테고리별 Hero 섹션 (그라데이션 배경, 배지, 제목, 설명) |
| Main        | 해당 카테고리 취미 카드 그리드 |

> 예: 운동형 페이지에는 운동형 취미 카드만 노출

---

## 6. 상호작용 패턴 (Interaction Patterns)

| 요소      | 인터랙션              |
| ------- | ----------------- |
| 카테고리 Select 선택 | 해당 카테고리 페이지로 이동   |
| 로고 클릭   | Home으로 이동         |
| 취미 카드   | Hover 시 시각적 강조    |
| 필터 상태   | 현재 카테고리 active 표시 |

* 클릭 중심 인터랙션
* framer-motion을 활용한 fade in 애니메이션 (페이지 로드 시)
* Hover 시 elevation 및 이동 효과

---

## 7. URL 구조 (URL Structure)

| 페이지  | URL              |
| ---- | ---------------- |
| Home | `/`              |
| 운동형  | `/sports`         |
| 지능형  | `/intellectual`   |
| 예술형  | `/art`            |

* Next.js **File-based Routing** 기준
* SEO 친화적 영문 slug 사용

---

## 8. 컴포넌트 계층 구조 (Component Hierarchy)

```
App Layout
├─ TopBar
│   ├─ Logo
│   └─ CategoryNav
│
├─ Page
│   ├─ Hero (Home only)
│   ├─ CategoryHero (Category only)
│   └─ HobbyGrid
│       └─ HobbyCard
│
└─ Footer (선택)
```

---

## 9. 상단바 / 하단바 구성

### 상단바 (필수)

| 요소      | 포함 여부 |
| ------- | ----- |
| 로고      | O     |
| 카테고리 필터 | O     |

### 하단바 (선택)

| 요소     | 설명          |
| ------ | ----------- |
| 서비스명   | HobbyFind   |
| 기본 텍스트 | © HobbyFind |

> 기능성 링크 없음 (요구사항 기준)

---

## 10. 기술 스택 고려 (Next.js 기반)

* **Next.js App Router**
* 페이지 구조 예시:

```
/app
 ├─ page.tsx          (Home)
 ├─ sports/page.tsx        (운동형)
 ├─ intellectual/page.tsx  (지능형)
 └─ art/page.tsx           (예술형)
```

* 공통 레이아웃: `layout.tsx`
* TopBar는 Layout에 포함
* 정적 렌더링(SSG) 적합 구조