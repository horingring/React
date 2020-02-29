import React, { Component } from 'react';
import './App.css';
import  Subject from './components/Subject';
import Content from './components/Content';
import Nav from './components/Nav';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="Hello World" content="Hi Guys, Nice to meet You!!!"></Subject>
        <br></br>
        <Nav></Nav>
        <br></br>
        <Content title="MainArticle" desc="This is Main Article"></Content>
      </div>
    );
  }
}

// **notice**
// 위의 코드들은 '유사 JS'이지, 정확히는 'JS'가 아니다!
// return되는 로직은 반드시 최종적으로 1개의 태그로 감싸주어야 한다.
// 위에서 정의한 태그를 바로 사용하는 모습을 볼 수 있다.


export default App;