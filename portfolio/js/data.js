const PORTFOLIO_DATA = {
  meta: {
    title: "웹 개발 학습 포트폴리오",
    subtitle: "HTML, CSS, JavaScript부터 Vue.js, Node.js까지의 학습 여정",
    dateRange: "2023.05.22 ~ 2023.09.13",
    totalMonths: 5,
    totalFiles: 128,
    totalDays: 52
  },

  months: [
    // ===== 2023년 5월 =====
    {
      id: "2023-05",
      name: "2023년 5월",
      theme: "HTML & CSS 기초",
      color: "#4CAF50",
      summary: "HTML 기본 태그, 테이블, CSS 스타일링, Flexbox 레이아웃, 쇼핑몰 페이지 제작까지 웹 개발의 기초를 학습",
      dates: [
        {
          date: "2023-05-22",
          folder: "2023-05/2023-05-22",
          topic: "HTML 기초",
          description: "heading, 텍스트 서식(b, strong), blockquote, hr 등 기본 HTML 태그 학습",
          tags: ["html", "기초", "태그"],
          highlight: false,
          files: [
            { name: "index.html", label: "기본 HTML 태그 실습" },
            { name: "test.html", label: "태그 테스트 1" },
            { name: "test2.html", label: "태그 테스트 2" },
            { name: "test3.html", label: "태그 테스트 3" },
            { name: "test4.html", label: "태그 테스트 4" }
          ]
        },
        {
          date: "2023-05-23",
          folder: "2023-05/2023-05-23",
          topic: "테이블과 리스트",
          description: "테이블(table, tr, td), 리스트(ol, ul), 이미지 갤러리, 훈민정음 문서 작성",
          tags: ["html", "테이블", "리스트", "이미지"],
          highlight: false,
          files: [
            { name: "index.html", label: "테이블 레이아웃 (colspan, rowspan)" },
            { name: "gallery.html", label: "이미지 갤러리" },
            { name: "hoonmin.html", label: "훈민정음 문서 (ol, ul, dl)" },
            { name: "main.html", label: "메인 페이지 실습" }
          ]
        },
        {
          date: "2023-05-24",
          folder: "2023-05/2023-05-24",
          topic: "CSS 스타일링 기초",
          description: "CSS 기본 속성, 실내동물원 웹페이지 제작, 레이아웃 스타일링",
          tags: ["css", "스타일링", "웹페이지"],
          highlight: false,
          files: [
            { name: "index.html", label: "실내동물원 웹페이지" },
            { name: "main.html", label: "메인 레이아웃" }
          ]
        },
        {
          date: "2023-05-25",
          folder: "2023-05/2023-05-25",
          topic: "CSS 레이아웃 (Position)",
          description: "div 레이아웃, position(relative, absolute, fixed), display 속성 학습",
          tags: ["css", "position", "레이아웃", "div"],
          highlight: false,
          files: [
            { name: "index.html", label: "CSS Position 실습" },
            { name: "divtest1.html", label: "div 레이아웃 테스트" },
            { name: "test1.html", label: "position 테스트 1" },
            { name: "test2.html", label: "position 테스트 2" }
          ]
        },
        {
          date: "2023-05-26",
          folder: "2023-05/2023-05-26",
          topic: "Flexbox 기초",
          description: "Flex 컨테이너와 아이템, flex-direction, justify-content, align-items 실습",
          tags: ["css", "flexbox", "레이아웃"],
          highlight: false,
          files: [
            { name: "flex_exmp.html", label: "Flexbox 예제" }
          ]
        },
        {
          date: "2023-05-30",
          folder: "2023-05/2023-05-30",
          topic: "Flexbox 심화",
          description: "flex-wrap, align-self, flex 주축과 교차축 개념 심화 학습",
          tags: ["css", "flexbox", "심화"],
          highlight: false,
          files: [
            { name: "flex.html", label: "Flex 심화 실습" }
          ]
        },
        {
          date: "2023-05-31",
          folder: "2023-05/2023-05-31",
          topic: "쇼핑몰 페이지 제작",
          description: "Bootstrap Icons 활용, 상품 목록/상세/장바구니 페이지 구현",
          tags: ["html", "css", "쇼핑몰", "프로젝트"],
          highlight: true,
          files: [
            { name: "index.html", label: "쇼핑몰 메인 (상품 목록)" },
            { name: "detail.html", label: "상품 상세 페이지" },
            { name: "cart.html", label: "장바구니 페이지" }
          ]
        },
        {
          date: "2023-05-31",
          folder: "2023-05/2023-05-31 home",
          topic: "쇼핑몰 페이지 (홈 버전)",
          description: "쇼핑몰 프로젝트 홈 버전 - 메인, 상세, 장바구니 페이지",
          tags: ["html", "css", "쇼핑몰", "프로젝트"],
          highlight: true,
          files: [
            { name: "index.html", label: "쇼핑몰 홈 메인" },
            { name: "detail.html", label: "상품 상세 페이지" },
            { name: "cart.html", label: "장바구니 페이지" }
          ]
        }
      ]
    },

    // ===== 2023년 6월 =====
    {
      id: "2023-06",
      name: "2023년 6월",
      theme: "JavaScript 기초 & CSS Grid",
      color: "#2196F3",
      summary: "Flex 레이아웃 완성, JavaScript 변수/조건문/반복문/함수/배열 학습, 게임 프로젝트(빙고, 미로, 베스킨라빈스31), CSS Grid 레이아웃, 멍냥 월드컵 제작",
      dates: [
        {
          date: "2023-06-02",
          folder: "2023-06/2023-06-02",
          topic: "Flex 레이아웃 완성",
          description: "반려동물 정보 페이지 - Flex 레이아웃 종합 실습",
          tags: ["css", "flexbox", "레이아웃"],
          highlight: false,
          files: [
            { name: "flex-final.html", label: "Flex 최종 레이아웃 (반려동물)" }
          ]
        },
        {
          date: "2023-06-05",
          folder: "2023-06/2023-06-05",
          topic: "CSS 복습 (id, class, flex-flow)",
          description: "id와 class 차이점, flex-flow 단축 속성, margin/padding 개념 복습",
          tags: ["css", "복습", "개념정리"],
          highlight: false,
          files: [
            { name: "index.html", label: "CSS 개념 Q&A 정리" }
          ]
        },
        {
          date: "2023-06-07",
          folder: "2023-06/2023-06-07",
          topic: "동물보호센터 웹사이트 & JavaScript 입문",
          description: "동물보호센터 메뉴 레이아웃, JavaScript 변수/연산자/document.write 기초",
          tags: ["html", "css", "javascript", "입문"],
          highlight: false,
          files: [
            { name: "index.html", label: "동물보호센터 웹사이트" },
            { name: "javascript.html", label: "JavaScript 변수와 연산자 입문" }
          ]
        },
        {
          date: "2023-06-08",
          folder: "2023-06/2023-06-08",
          topic: "JavaScript 변수와 연산",
          description: "prompt 입력, 변수 스왑, 산술 연산, 문자열 연결 실습",
          tags: ["javascript", "변수", "연산자"],
          highlight: false,
          files: [
            { name: "script1.html", label: "변수와 연산 실습" },
            { name: "script2.html", label: "prompt 입력 활용" },
            { name: "script3.html", label: "연산 응용 문제" }
          ]
        },
        {
          date: "2023-06-09",
          folder: "2023-06/2023-06-09",
          topic: "JavaScript 조건문 (if/else)",
          description: "if, else, else if 조건문, Math.random, 동전 앞뒤 맞추기 게임",
          tags: ["javascript", "조건문", "if"],
          highlight: false,
          files: [
            { name: "script_if.html", label: "조건문 실습 (if/else/switch)" }
          ]
        },
        {
          date: "2023-06-12",
          folder: "2023-06/2023-06-12",
          topic: "JavaScript 반복문 (for/while)",
          description: "for문, while문 기본 구조, 구구단 출력, 중첩 반복문",
          tags: ["javascript", "반복문", "for", "while"],
          highlight: false,
          files: [
            { name: "script_loop1.html", label: "반복문 기초 (for, while)" }
          ]
        },
        {
          date: "2023-06-12",
          folder: "2023-06/2023-06-12home",
          topic: "숫자 맞추기 게임",
          description: "while 반복문과 Math.random을 활용한 숫자 맞추기 게임",
          tags: ["javascript", "게임", "반복문"],
          highlight: false,
          files: [
            { name: "home.html", label: "숫자 맞추기 게임" }
          ]
        },
        {
          date: "2023-06-13",
          folder: "2023-06/2023-06-13",
          topic: "JavaScript 배열과 반복문 응용",
          description: "배열(Array) 기초, 함수 선언과 호출, DOM getElementById 활용",
          tags: ["javascript", "배열", "함수"],
          highlight: false,
          files: [
            { name: "script_array.html", label: "배열과 함수 기초" },
            { name: "script_loop2.html", label: "반복문 응용" }
          ]
        },
        {
          date: "2023-06-14",
          folder: "2023-06/2023-06-14",
          topic: "JavaScript 함수 기초",
          description: "함수 선언, 매개변수, 반환값, 성적 계산기, 나이 계산기 구현",
          tags: ["javascript", "함수", "DOM"],
          highlight: false,
          files: [
            { name: "script_function.html", label: "함수 기초와 응용 (계산기)" }
          ]
        },
        {
          date: "2023-06-15",
          folder: "2023-06/2023-06-15",
          topic: "JavaScript 함수 응용",
          description: "카페 주문 시스템, 외부 JS 파일 분리, 함수 활용 심화",
          tags: ["javascript", "함수", "응용"],
          highlight: false,
          files: [
            { name: "script_func2.html", label: "카페 주문 시스템" },
            { name: "script_func3.html", label: "함수 응용 3" },
            { name: "script_func4.html", label: "함수 응용 4" },
            { name: "script_func5.html", label: "함수 응용 5" }
          ]
        },
        {
          date: "2023-06-16",
          folder: "2023-06/2023-06-16",
          topic: "JavaScript 함수 심화",
          description: "함수 심화 학습, 다양한 함수 패턴 실습",
          tags: ["javascript", "함수", "심화"],
          highlight: false,
          files: [
            { name: "script_func6.html", label: "함수 심화 실습 1" },
            { name: "script_func7.html", label: "함수 심화 실습 2" }
          ]
        },
        {
          date: "2023-06-19",
          folder: "2023-06/2023-06-19",
          topic: "JavaScript 배열 메서드",
          description: "배열 메서드 활용, 함수와 배열 조합 실습",
          tags: ["javascript", "배열", "메서드"],
          highlight: false,
          files: [
            { name: "script_array1.html", label: "배열 메서드 1" },
            { name: "script_array2.html", label: "배열 메서드 2" },
            { name: "script_func8.html", label: "함수와 배열 조합" }
          ]
        },
        {
          date: "2023-06-19",
          folder: "2023-06/2023-06-19s",
          topic: "배열 실습 보충",
          description: "배열 추가 실습",
          tags: ["javascript", "배열"],
          highlight: false,
          files: [
            { name: "script_array3.html", label: "배열 실습 보충" }
          ]
        },
        {
          date: "2023-06-20",
          folder: "2023-06/2023-06-20",
          topic: "JavaScript 배열 심화",
          description: "배열 심화 학습, 다양한 배열 조작 메서드 활용",
          tags: ["javascript", "배열", "심화"],
          highlight: false,
          files: [
            { name: "script_array3.html", label: "배열 심화 1" },
            { name: "script_array4.html", label: "배열 심화 2" },
            { name: "script_array5.html", label: "배열 심화 3" }
          ]
        },
        {
          date: "2023-06-22",
          folder: "2023-06/2023-06-22",
          topic: "베스킨라빈스 31 & 미로 게임",
          description: "배열과 split 활용 베스킨라빈스31 게임, 2D 배열 미로 만들기",
          tags: ["javascript", "게임", "배열", "프로젝트"],
          highlight: true,
          files: [
            { name: "game.html", label: "베스킨라빈스31 & 미로 게임" }
          ]
        },
        {
          date: "2023-06-23",
          folder: "2023-06/2023-06-23",
          topic: "로또 번호 생성기",
          description: "로또 번호 생성, 당첨 확인, 번호 출현 횟수 분석, addEventListener 학습",
          tags: ["javascript", "배열", "이벤트", "프로젝트"],
          highlight: true,
          files: [
            { name: "script_array7.html", label: "로또 번호 생성기" },
            { name: "num_count.html", label: "번호 출현 횟수 분석" },
            { name: "win_confirm.html", label: "당첨 확인" }
          ]
        },
        {
          date: "2023-06-24",
          folder: "2023-06/2023-06-24",
          topic: "빙고 게임",
          description: "5x5 빙고판 생성, 게임 로직 구현",
          tags: ["javascript", "게임", "프로젝트"],
          highlight: true,
          files: [
            { name: "bing_go.html", label: "빙고 게임" }
          ]
        },
        {
          date: "2023-06-27",
          folder: "2023-06/2023-06-27",
          topic: "보드 게임 프로젝트",
          description: "테이블 기반 보드 게임, 게임 시작/진행 로직 구현",
          tags: ["javascript", "게임", "프로젝트"],
          highlight: true,
          files: [
            { name: "game.html", label: "보드 게임" }
          ]
        },
        {
          date: "2023-06-28",
          folder: "2023-06/2023-06-28",
          topic: "CSS Grid 레이아웃",
          description: "CSS Grid 기본 구조, grid-template, 다양한 Grid 레이아웃 실습",
          tags: ["css", "grid", "레이아웃"],
          highlight: false,
          files: [
            { name: "style_grid.html", label: "Grid 기초" },
            { name: "style_grid2.html", label: "Grid 실습 2" },
            { name: "style_grid3.html", label: "Grid 실습 3" },
            { name: "style_gridTest.html", label: "Grid 테스트" },
            { name: "script_test.html", label: "스크립트 테스트" }
          ]
        },
        {
          date: "2023-06-29",
          folder: "2023-06/2023-06-29",
          topic: "CSS Grid 심화",
          description: "Grid 고급 레이아웃, 영역 배치, 반응형 Grid 실습",
          tags: ["css", "grid", "심화"],
          highlight: false,
          files: [
            { name: "style_grid4.html", label: "Grid 심화 1" },
            { name: "style_grid5.html", label: "Grid 심화 2" },
            { name: "style_grid6.html", label: "Grid 심화 3" }
          ]
        },
        {
          date: "2023-06-30",
          folder: "2023-06/2023-06-30",
          topic: "멍냥 월드컵 & CSS 기타",
          description: "이상형 월드컵(멍냥 월드컵) 프로젝트, CSS 기타 속성 학습",
          tags: ["javascript", "css", "프로젝트", "게임"],
          highlight: true,
          files: [
            { name: "worldcup.html", label: "멍냥 월드컵 (이상형 월드컵)" },
            { name: "wc.html", label: "월드컵 테스트" },
            { name: "style_etc.html", label: "CSS 기타 속성" }
          ]
        }
      ]
    },

    // ===== 2023년 7월 =====
    {
      id: "2023-07",
      name: "2023년 7월",
      theme: "DOM, 객체, jQuery",
      color: "#FF9800",
      summary: "지하철 시뮬레이션, CSS 애니메이션, DOM 객체 모델, BOM, 회원가입 폼, 동물원 웹사이트, 가계부 프로젝트, jQuery 라이브러리 학습",
      dates: [
        {
          date: "2023-07-03",
          folder: "2023-07/2023-07-03",
          topic: "지하철 시뮬레이션 & DOM 기초",
          description: "지하철 노선도 시뮬레이션(40역, 4대 차량), DOM 요소 제어 기초",
          tags: ["javascript", "DOM", "프로젝트", "시뮬레이션"],
          highlight: true,
          files: [
            { name: "subway.html", label: "지하철 노선도 시뮬레이션" },
            { name: "new.html", label: "DOM 제어 실습 (구구단)" }
          ]
        },
        {
          date: "2023-07-06",
          folder: "2023-07/2023-07-06",
          topic: "회원가입 폼 (jQuery)",
          description: "네이버 회원가입 페이지, form/input/select, jQuery 기초, meta 태그",
          tags: ["html", "form", "jQuery", "회원가입"],
          highlight: false,
          files: [
            { name: "study.html", label: "회원가입 폼 (네이버 스타일)" }
          ]
        },
        {
          date: "2023-07-07",
          folder: "2023-07/2023-07-07",
          topic: "CSS 애니메이션 & 지하철 개선",
          description: "CSS animation, keyframes, transform, 지하철 시뮬레이션 고도화",
          tags: ["css", "애니메이션", "keyframes", "transform"],
          highlight: false,
          files: [
            { name: "style_ani.html", label: "CSS 애니메이션 (keyframes)" },
            { name: "style_ani2.html", label: "CSS 애니메이션 응용" },
            { name: "Tsubway.html", label: "지하철 시뮬레이션 개선" }
          ]
        },
        {
          date: "2023-07-10",
          folder: "2023-07/2023-07-10",
          topic: "DOM 객체 모델 & BOM",
          description: "DOM 구조, BOM(window, open, close), 부모-자식 창 제어, 색상 선택기, 테이블 동적 생성",
          tags: ["javascript", "DOM", "BOM", "객체"],
          highlight: false,
          files: [
            { name: "script_object.html", label: "DOM/BOM 객체 학습" },
            { name: "script_object2.html", label: "객체 실습 2" },
            { name: "child.html", label: "부모-자식 창 제어" },
            { name: "color.html", label: "랜덤 색상 선택기 (팝업)" },
            { name: "table.html", label: "테이블 동적 생성" },
            { name: "make.html", label: "요소 동적 생성" }
          ]
        },
        {
          date: "2023-07-11",
          folder: "2023-07/2023-07-11",
          topic: "회원가입 & URL 파라미터",
          description: "회원가입 폼 제출, URL 파라미터 처리, location/history 객체",
          tags: ["javascript", "form", "URL", "객체"],
          highlight: false,
          files: [
            { name: "join.html", label: "회원가입 폼" },
            { name: "join_save.html", label: "가입 정보 처리 (URL 파라미터)" },
            { name: "script_object.html", label: "객체 활용 실습" }
          ]
        },
        {
          date: "2023-07-12",
          folder: "2023-07/2023-07-12",
          topic: "동물원 웹사이트",
          description: "ZOO 웹사이트 레이아웃, 네비게이션, Bootstrap Icons 활용",
          tags: ["html", "css", "웹사이트", "프로젝트"],
          highlight: true,
          files: [
            { name: "index.html", label: "동물원 웹사이트" }
          ]
        },
        {
          date: "2023-07-26",
          folder: "2023-07/2023-07-26",
          topic: "객체 활용 & 데이트 기록앱",
          description: "JavaScript 객체 심화, 데이트 장소/비용/만족도 기록 앱 구현",
          tags: ["javascript", "객체", "프로젝트"],
          highlight: false,
          files: [
            { name: "index.html", label: "객체 활용 실습" },
            { name: "romantic.html", label: "데이트 기록 앱" }
          ]
        },
        {
          date: "2023-07-27",
          folder: "2023-07/2023-07-27",
          topic: "가계부 & 은행 관리 프로젝트",
          description: "가계부(수입/지출/카드 관리), 은행 계좌 등록 시스템 구현",
          tags: ["javascript", "프로젝트", "가계부"],
          highlight: true,
          files: [
            { name: "index.html", label: "가계부 프로젝트" },
            { name: "bank.html", label: "은행 계좌 관리" }
          ]
        },
        {
          date: "2023-07-28",
          folder: "2023-07/2023-07-28",
          topic: "jQuery 라이브러리",
          description: "jQuery 선택자, 이벤트, 애니메이션, 슬라이드, 태그 조작, 사이즈 제어",
          tags: ["jQuery", "라이브러리", "애니메이션"],
          highlight: false,
          files: [
            { name: "index.html", label: "jQuery 메인 (음료 메뉴)" },
            { name: "jquery.html", label: "jQuery 기초" },
            { name: "jquery_ani.html", label: "jQuery 애니메이션" },
            { name: "jquery_slide.html", label: "jQuery 슬라이드" },
            { name: "jquery_tag.html", label: "jQuery 태그 조작" },
            { name: "jquery_size.html", label: "jQuery 사이즈 제어" },
            { name: "jquery_test1.html", label: "jQuery 종합 테스트" }
          ]
        }
      ]
    },

    // ===== 2023년 8월 =====
    {
      id: "2023-08",
      name: "2023년 8월",
      theme: "데이터 시각화 & API",
      color: "#E91E63",
      summary: "비동기 처리, 공공 데이터 API 활용, Canvas/Chart.js 데이터 시각화, MBTI 궁합, 주식 차트, JSON 처리, SVG, 마블 보드게임, 모듈화 학습",
      dates: [
        {
          date: "2023-08-07",
          folder: "2023-08/2023-08-07",
          topic: "배열 정렬 & jQuery 활용",
          description: "2차원 배열 정렬(나이, 주소), jQuery each 메서드, 테이블 동적 생성",
          tags: ["javascript", "jQuery", "배열", "정렬"],
          highlight: false,
          files: [
            { name: "index.html", label: "배열 정렬 (나이/주소)" },
            { name: "index2.html", label: "배열 활용 2" }
          ]
        },
        {
          date: "2023-08-08",
          folder: "2023-08/2023-08-08",
          topic: "JavaScript 비동기 처리",
          description: "콜백 함수, Promise, async/await, 마이크로 큐 개념 학습",
          tags: ["javascript", "비동기", "Promise", "async"],
          highlight: false,
          files: [
            { name: "async_text.html", label: "비동기 처리 (callback, Promise, async/await)" }
          ]
        },
        {
          date: "2023-08-09",
          folder: "2023-08/2023-08-09",
          topic: "공공데이터 API & Canvas",
          description: "인천 인공어초 공공데이터 API 활용, Canvas 도형 그리기 (사각형, 원)",
          tags: ["javascript", "API", "공공데이터", "Canvas"],
          highlight: true,
          files: [
            { name: "incheon.html", label: "인천 인공어초 데이터 검색" },
            { name: "traffic.html", label: "Canvas 도형 그리기" }
          ]
        },
        {
          date: "2023-08-10",
          folder: "2023-08/2023-08-10",
          topic: "Canvas 차트 & 소방 데이터",
          description: "Canvas 막대 그래프 직접 구현, 소방 구급 통계 데이터 시각화, 원형 차트",
          tags: ["javascript", "Canvas", "차트", "데이터시각화"],
          highlight: true,
          files: [
            { name: "index.html", label: "Canvas 막대 차트 구현" },
            { name: "fire.html", label: "소방 데이터 시각화 (원형 차트)" }
          ]
        },
        {
          date: "2023-08-11",
          folder: "2023-08/2023-08-11",
          topic: "MBTI 궁합 차트",
          description: "MBTI 궁합 테스트, Canvas 시각화, 캐릭터 이미지 매칭",
          tags: ["javascript", "Canvas", "MBTI", "프로젝트"],
          highlight: true,
          files: [
            { name: "index.html", label: "MBTI 관련 실습" },
            { name: "mbti.html", label: "MBTI 궁합 차트" }
          ]
        },
        {
          date: "2023-08-14",
          folder: "2023-08/2023-08-14",
          topic: "공공 임대주택 데이터 검색",
          description: "시도/구군 선택, 전용면적/주택유형 필터, 공공 임대주택 데이터 조회",
          tags: ["javascript", "API", "공공데이터", "검색"],
          highlight: true,
          files: [
            { name: "index.html", label: "공공 임대주택 데이터 검색" }
          ]
        },
        {
          date: "2023-08-16",
          folder: "2023-08/2023-08-16",
          topic: "Chart.js 기초",
          description: "Chart.js 라이브러리, Bar 차트, Line 차트, autocolors 플러그인",
          tags: ["javascript", "Chart.js", "데이터시각화"],
          highlight: false,
          files: [
            { name: "chart.html", label: "Chart.js 기초 (Bar 차트)" },
            { name: "bar.html", label: "Bar 차트 실습" },
            { name: "bar2.html", label: "Bar 차트 응용" },
            { name: "line.html", label: "Line 차트 실습" }
          ]
        },
        {
          date: "2023-08-17",
          folder: "2023-08/2023-08-17",
          topic: "Chart.js 다양한 차트",
          description: "애니메이션 차트, 파이 차트, 폴라 차트, 레이더 차트, datalabels 플러그인",
          tags: ["javascript", "Chart.js", "데이터시각화", "심화"],
          highlight: false,
          files: [
            { name: "ani_chart.html", label: "애니메이션 Bar 차트" },
            { name: "ani_chart2.html", label: "애니메이션 차트 2" },
            { name: "pi.html", label: "파이(Pie) 차트" },
            { name: "polar.html", label: "폴라(Polar) 차트" },
            { name: "radar.html", label: "레이더(Radar) 차트" }
          ]
        },
        {
          date: "2023-08-18",
          folder: "2023-08/2023-08-18",
          topic: "Chart.js 고급 차트 & 주식",
          description: "버블 차트, 자동차 데이터 차트, 주식 차트 프로젝트",
          tags: ["javascript", "Chart.js", "주식", "프로젝트"],
          highlight: true,
          files: [
            { name: "bubble.html", label: "버블(Bubble) 차트" },
            { name: "car.html", label: "자동차 데이터 차트" },
            { name: "stock.html", label: "주식 차트 프로젝트" }
          ]
        },
        {
          date: "2023-08-21",
          folder: "2023-08/2023-08-21",
          topic: "JSON & 일기장 앱",
          description: "JSON 데이터 파싱/활용, 음식 검색, 일기장 앱 (날씨/날짜 기록)",
          tags: ["javascript", "JSON", "프로젝트"],
          highlight: false,
          files: [
            { name: "index.html", label: "JSON 활용 실습" },
            { name: "json_test1.html", label: "JSON 음식 검색" },
            { name: "json_test2.html", label: "JSON 테스트 2" },
            { name: "diary.html", label: "일기장 앱" }
          ]
        },
        {
          date: "2023-08-22",
          folder: "2023-08/2023-08-22",
          topic: "JSON 데이터 & Chart.js 연동",
          description: "JSON 데이터 검색/필터링, Chart.js 연동, 키/시력 상세검색",
          tags: ["javascript", "JSON", "Chart.js", "검색"],
          highlight: false,
          files: [
            { name: "json_re.html", label: "JSON 데이터 검색 & 차트" },
            { name: "test_re2.html", label: "데이터 필터 테스트" }
          ]
        },
        {
          date: "2023-08-25",
          folder: "2023-08/2023-08-25",
          topic: "마블 보드게임 & SVG",
          description: "SVG 기초(rect, circle, line, polygon), 마블 보드게임 프로젝트, 참가자 설정",
          tags: ["javascript", "SVG", "게임", "프로젝트"],
          highlight: true,
          files: [
            { name: "board.html", label: "마블 보드게임" },
            { name: "set_gamer.html", label: "참가자 설정 팝업" }
          ]
        },
        {
          date: "2023-08-28",
          folder: "2023-08/2023-08-28",
          topic: "JavaScript 모듈화",
          description: "ES6 모듈(import/export), type='module', 코드 구조화",
          tags: ["javascript", "모듈", "ES6"],
          highlight: false,
          files: [
            { name: "index.html", label: "JavaScript 모듈화 실습" }
          ]
        }
      ]
    },

    // ===== 2023년 9월 =====
    {
      id: "2023-09",
      name: "2023년 9월",
      theme: "D3.js 데이터 시각화",
      color: "#9C27B0",
      summary: "D3.js 라이브러리를 활용한 고급 데이터 시각화 프로젝트",
      dates: [
        {
          date: "2023-09-13",
          folder: "2023-09/2023-09-13",
          topic: "D3.js 데이터 시각화",
          description: "D3.js 라이브러리를 활용한 인터랙티브 데이터 시각화",
          tags: ["javascript", "D3.js", "데이터시각화", "프로젝트"],
          highlight: true,
          files: [
            { name: "data_visual.html", label: "D3.js 데이터 시각화" }
          ]
        }
      ]
    }
  ],

  // ===== 과제 (homework) =====
  homework: {
    name: "과제 모음",
    color: "#FF5722",
    entries: [
      {
        folder: "homework",
        topic: "SVschool 홈페이지",
        description: "학교 홈페이지 레이아웃 - 로그인, 메뉴, 공지사항",
        tags: ["html", "css", "레이아웃"],
        highlight: false,
        files: [
          { name: "homework.html", label: "SVschool 홈페이지" }
        ]
      },
      {
        folder: "homework/08/11",
        topic: "Chart.js 과제",
        description: "Chart.js를 활용한 데이터 시각화 과제",
        tags: ["javascript", "Chart.js", "과제"],
        highlight: false,
        files: [
          { name: "study.html", label: "Chart.js 차트 과제" }
        ]
      },
      {
        folder: "homework/08/16",
        topic: "웹사이트 레이아웃 과제",
        description: "헤더, 네비게이션, 기사, 포스팅 섹션 레이아웃 구현",
        tags: ["html", "css", "레이아웃", "과제"],
        highlight: false,
        files: [
          { name: "static/index.html", label: "웹사이트 레이아웃 과제" }
        ]
      },
      {
        folder: "homework/08/21",
        topic: "데이터 검색 & 차트 과제",
        description: "검색 기능과 Chart.js를 연동한 데이터 시각화 과제",
        tags: ["javascript", "Chart.js", "검색", "과제"],
        highlight: false,
        files: [
          { name: "index.html", label: "데이터 검색 & 차트 과제" }
        ]
      }
    ]
  },

  // ===== Node.js & Vue.js 프로젝트 =====
  advancedProjects: {
    name: "Node.js & Vue.js 프로젝트",
    color: "#607D8B",
    entries: [
      {
        folder: "NodeJS/web-nodejs1",
        topic: "Node.js 기초",
        description: "Node.js 첫 번째 프로젝트 - 서버 기초 학습",
        tags: ["Node.js", "서버", "기초"],
        highlight: false,
        previewable: false,
        files: [
          { name: "test1.js", label: "Node.js 기초 실습" }
        ]
      },
      {
        folder: "NodeJS/web-nodejs2",
        topic: "Node.js 웹서버 & 로그인",
        description: "Express 웹서버, 쿠키, 로그인/인증 시스템 구현",
        tags: ["Node.js", "Express", "로그인", "쿠키"],
        highlight: false,
        previewable: false,
        files: [
          { name: "App.js", label: "Express 서버 메인" },
          { name: "src/index.js", label: "인덱스 라우터" },
          { name: "src/login.js", label: "로그인 페이지" },
          { name: "src/login_chk.js", label: "로그인 검증" },
          { name: "src/func.js", label: "유틸리티 함수" },
          { name: "src/question.js", label: "질문 페이지" }
        ]
      },
      {
        folder: "NodeJS/web-nodejs3",
        topic: "Node.js 템플릿 엔진",
        description: "템플릿 엔진 활용, JS 템플릿 라이브러리 구현",
        tags: ["Node.js", "템플릿", "서버"],
        highlight: false,
        previewable: false,
        files: [
          { name: "App.js", label: "서버 메인" },
          { name: "lib/template.js", label: "HTML 템플릿 엔진" },
          { name: "lib/JStemplate.js", label: "JS 템플릿 엔진" }
        ]
      },
      {
        folder: "NodeJS/vuejs1",
        topic: "Vue.js 웨딩 드레스 & MBTI",
        description: "Vue.js 첫 번째 프로젝트 - 컴포넌트, 라우터, 웨딩드레스 쇼핑, MBTI 테스트",
        tags: ["Vue.js", "컴포넌트", "라우터", "프로젝트"],
        highlight: true,
        previewable: false,
        files: [
          { name: "src/App.vue", label: "앱 메인 컴포넌트" },
          { name: "src/router.js", label: "라우터 설정" },
          { name: "src/components/SdmDress.vue", label: "웨딩드레스 페이지" },
          { name: "src/components/SdmMakeUp.vue", label: "메이크업 페이지" },
          { name: "src/components/SdmQs.vue", label: "MBTI 질문 페이지" },
          { name: "src/components/SdmLogin.vue", label: "로그인 페이지" },
          { name: "src/components/SdmSign.vue", label: "회원가입 페이지" },
          { name: "src/components/MyHome.vue", label: "홈 페이지" }
        ]
      },
      {
        folder: "NodeJS/vuejs2",
        topic: "Vue.js 동물 입양 사이트",
        description: "Vue.js 두 번째 프로젝트 - 동물 입양, 슬라이드, 회원가입",
        tags: ["Vue.js", "컴포넌트", "라우터", "프로젝트"],
        highlight: true,
        previewable: false,
        files: [
          { name: "src/App.vue", label: "앱 메인 컴포넌트" },
          { name: "src/router/index.js", label: "라우터 설정" },
          { name: "src/views/HomeView.vue", label: "홈 뷰" },
          { name: "src/views/AdoptionView.vue", label: "입양 페이지" },
          { name: "src/views/JoinView.vue", label: "회원가입 뷰" },
          { name: "src/components/AnimalSlide.vue", label: "동물 슬라이드" },
          { name: "src/components/TopMenu.vue", label: "상단 메뉴" }
        ]
      },
      {
        folder: "NodeJS/TodoList",
        topic: "Vue.js TodoList",
        description: "Vue.js + Pinia 상태관리, TodoList CRUD, 필터링, 로컬스토리지 저장",
        tags: ["Vue.js", "Pinia", "CRUD", "프로젝트"],
        highlight: true,
        previewable: false,
        files: [
          { name: "src/App.vue", label: "앱 메인 컴포넌트" },
          { name: "src/router/index.js", label: "라우터 설정" },
          { name: "src/views/TodoListContainer.vue", label: "TodoList 컨테이너" },
          { name: "src/components/TodoList.vue", label: "TodoList 목록" },
          { name: "src/components/TodoListMain.vue", label: "TodoList 메인" },
          { name: "src/components/TodoListMenu.vue", label: "TodoList 메뉴" },
          { name: "src/components/TodoListNew.vue", label: "새 할일 추가" },
          { name: "src/stores/storage.js", label: "로컬스토리지 관리" },
          { name: "src/stores/filters.js", label: "필터 상태관리" }
        ]
      },
      {
        folder: "NodeJS/ILoveSchool",
        topic: "Vue.js ILoveSchool",
        description: "Vue.js + Vue Router, 학교 커뮤니티 - 로그인, 회원가입, 축하 메시지",
        tags: ["Vue.js", "라우터", "커뮤니티", "프로젝트"],
        highlight: true,
        previewable: false,
        files: [
          { name: "src/App.vue", label: "앱 메인 컴포넌트" },
          { name: "src/router/index.js", label: "라우터 설정" },
          { name: "src/views/HomeView.vue", label: "홈 뷰" },
          { name: "src/views/Login.vue", label: "로그인 페이지" },
          { name: "src/views/SignUp.vue", label: "회원가입 페이지" },
          { name: "src/views/CelebrationMsg.vue", label: "축하 메시지 페이지" }
        ]
      }
    ]
  }
};
