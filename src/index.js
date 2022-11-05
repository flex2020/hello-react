//--- 이 부분에는 리액트 앱의 전역적인 설정이 들어감.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // public 폴더의 index.html의 id가 root인 태그를 렌더링함.
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

reportWebVitals();
