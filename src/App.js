import React, { Component } from 'react';
import './App.css';
import  Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Nav from './components/Nav';
import Control from './components/Control';

class App extends Component{
constructor(props){
  super(props);
  this.max_contentsId = 3;
  this.state = {
    mode : 'read',
    selected_content_id : 2,
    welcome : {title:'Welcome!!', desc:'This is Welcome mode!!!'},
    subject : {title:'Hello React', content : 'Hi Friends, Glad to meet You!!!'},
    data : [
      {id:1, innerText:'HTML555', content:'HTML is Hypertext Markup Language.'},
      {id:2, innerText:'CSS333', content:'CSS is for design.'},
      {id:3, innerText:'JavaScriptttt', content:'JavaScript is for interaction.'}
    ],
    content : {title:'MMMainAAArticle', desc:'TTThis is Main Article!'}
  }
}

  render(){
    var _title,_desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      var i=0;
      while(i<this.state.data.length){
        var data = this.state.data[i];
        if(data.id === this.state.selected_content_id){
          _title = data.innerText;
          _desc = data.content;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
          break;
        }
        i=i+1;
      }
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_contentsId = this.max_contentsId+1;
        var _data = this.state.data.concat({
          id:this.max_contentsId, innerText:_title, content:_desc
        });
        this.setState({data : _data});
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          content={this.state.subject.content}
          onChangeMode={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
            {/* 결론적으로 얘는 '이러기를' 바래 */}
        </Subject>
        <br></br>
        <Nav
          data={this.state.data}
          onChangeMode={function(id){
            this.setState({ 
                mode : 'read',
                selected_content_id : Number(id)
              });
          }.bind(this)}
        ></Nav>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode : _mode
          })
        }.bind(this)}></Control>
        <br></br>
        {_article}
      </div>
    );
  }
}

// **notice**
// 위의 코드들은 '유사 JS'이지, 정확히는 'JS'가 아니다!
// return되는 로직은 반드시 최종적으로 1개의 태그로 감싸주어야 한다.
// 위에서 정의한 태그를 바로 사용하는 모습을 볼 수 있다.


export default App;