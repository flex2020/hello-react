# 🙌hello-react: react의 기초를 공부한 레포지토리

## React란
> - 2013년 Facebook에서 개발한 라이브러리로, "지속적으로 데이터가 변화하는 대규모 애플리케이션 구축"하는 것을 목표로 개발하였다.
> - Angular 혹은 Vue는 프레임워크이고, React는 view만을 담당하는 라이브러리라는 것이 다르다.
> - React는 Angular와 Vue와 같은 프레임워크와 달리 라이브러리이므로, 내장된 기능이 부족하여 ＊*third-party 라이브러리* (react-router-dom, redux)를 함께 사용한다. (third-party 라이브러리란 제 3자 라이브러리 즉, 프로그래밍 개발과 개발자 외의 제 3자인 라이브러리를 말한다.)
> 
> (+) 참고 및 출처 : https://hymndev.tistory.com/45
## 공부한 내용들
> ### 구현 환경 / 사용한 IDE / 브라우저
> Windows 10 / VSCode(node.js) / Chrome
> ### 1. React-App 생성 및 시작
> - <a href="https://github.com/facebook/create-react-app">facebook/create-react-app</a>을 참고하여 시작한다
> - 프로젝트 시작 폴더에서 아래와 같이 입력 (react-dom과 같은 모듈도 같이 설치된다.)
> 
>   <pre><code> npx create-react-app my-app </code></pre>
> - 프로젝트를 작성 후 시작하려면 아래와 같이 입력
> 
>   <pre><code> npm start </code></pre>
> #
> ### 2. React는 사용자정의 컴포넌트를 활용한다.
> - React는 <Header></Header>와 같이 기존에 없는 컴포넌트를 사용자가 정의하고 사용할 수 있다.
> - 사용자정의 컴포넌트를 정의하기 위해선 아래와 같이 작성한다.
> <pre><code>
> // 함수의 이름이 컴포넌트의 이름이다.
> // 컴포넌트의 이름은 항상 대문자로 시작해야한다.
> function ComponentName() {
> // 이 부분에 javascript 코드가 들어갈 수 있다.
>  return (
>  // 컴포넌트에 들어갈 내용 (기존 HTML태그 와 javascript 코드)
> }
> </code></pre>
> 
> #
> ### 3. javascript로 이벤트 사용 및 기본 이벤트 지우기
> - onClick, onChange 등 여러 이벤트가 존재한다.
> - 이벤트 발생 시, 이벤트를 매개변수로 받아서, **event.preventDefault();** 를 작성해주면 무시한다.
> - 기본 이벤트를 지우고 사용자 정의 이벤트를 함수로 작성할 수도 있다.
> #
> ### 4. Props를 통해 컴포넌트에게 값을 전달
> - 사용자가 정의한 컴포넌트 선언 부분의 매개변수로 props를 만든다.
> - props를 통해 다른 컴포넌트에서 값을 이용할 수 있다.
> - 태그 안에서 props의 값을 식으로 사용하기 위해선 {props.[변수명]} 과 같이 중괄호로 감싸준다.
> #
> ### 5. State로 View에 렌더링되는 데이터 받아오기
> - 아래와 같이 선언할 수 있다.
>   <pre><code>const [data, setData] = useState(null);</code></pre>
> - 이 때, data는 읽기, setData는 data를 수정하기 위해 사용한다.
> - State는 View에 렌더링되는 데이터로 컴포넌트 안에서 관리된다.
> #
> ### 6. state가 객체인 경우 setState하는 법
> - const newState = {...state}; 혹은 배열인 경우 const newArray = [...array];로 객체를 복사하여 저장한다.
> - 그리고 newState에 값을 변경, 수정한다.
> - setState를 통해 newState로 state를 바꾼다. (setState를 하게 되면 바뀐 값이랑 다른 경우 값을 바꿔준다.)
> #
# 
