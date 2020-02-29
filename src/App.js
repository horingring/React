import React, { Component } from 'react';
import './App.css';
import  Subject from './components/Subject';
import Content from './components/Content';
import Nav from './components/Nav';

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    subject : {title:'Hello React', content : 'Hi Friends, Glad to meet You!!!'},
    data : [
      {id:1, innerText:'HTML555'},
      {id:2, innerText:'CSS333'},
      {id:3, innerText:'JavaScriptttt'}
    ],
    content : {title:'MMMainAAArticle', desc:'TTThis is Main Article!'}
  }
}

  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          content={this.state.subject.content}>
        </Subject>
        <br></br>
        <Nav
          data={this.state.data}
        ></Nav>
        <br></br>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
      </div>
    );
  }
}

// **notice**
// 위의 코드들은 '유사 JS'이지, 정확히는 'JS'가 아니다!
// return되는 로직은 반드시 최종적으로 1개의 태그로 감싸주어야 한다.
// 위에서 정의한 태그를 바로 사용하는 모습을 볼 수 있다.


export default App;