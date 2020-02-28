import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
        wolrd wide web!
      </header>
    );
  }
}

class Nav extends Component{
  render(){
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <br></br>
        <Nav></Nav>
        <br></br>
        <Content></Content>
      </div>
    );
  }
}

// **notice**
// 위의 코드들은 '유사 JS'이지, 정확히는 'JS'가 아니다!
// return되는 로직은 반드시 최종적으로 1개의 태그로 감싸주어야 한다.
// 위에서 정의한 태그를 바로 사용하는 모습을 볼 수 있다.


export default App;
