import logo from './logo.svg';
import './App.css';

/**
 * 리액트에서는 아래와 같이 컴포넌트를 함수처럼 정의하여 사용할 수 있다.
 * 또한, 함수의 매개변수로 props를 두어 사용자 정의 컴포넌트에서 설정한 속성을 사용할 수 있다.
 * 사용자 설정을 가져오는 법은 {props.속성명} 이다.
 * 이벤트함수 또한 받아올 수 있다.
 */
function Header(props) {
  console.log('props', props);
  return (
    <header>
        <h1><a href="/" onClick={function(event) {
          event.preventDefault(); // 자바스크립트에서 event 발생 시, 기본적인 동작 즉, href="/"를 무시함.
          props.onChangeMode();
        }}>{props.title}</a></h1>
      </header>
  )
}

/**
* 아래와 같이 목록도 하드코딩하지 않고 만들 수 있다.
* props로 받은 topics의 객체원소들을 통해 여러개의 속성을 줄 수도 있다.
*/

function Nav(props) {
  const lis = [
  ];
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>);
  }

  return (
    <nav>
        <ol>
        {lis}
        </ol>
      </nav>
  )
}

function Article(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'}
  ];
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web!"></Article>
    </div>
  );
}

export default App;
