import React, { Component } from 'react';
import './App.css';
import  Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Nav from './components/Nav';
import Control from './components/Control';
import UpdateContent from './components/UpdateContent';

class App extends Component{
constructor(props){
  super(props);
  this.max_contentsId = 3;
  this.state = {
    mode : 'welcome',
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

  getReadData(){
    var i=0;
      while(i<this.state.data.length){
        var data = this.state.data[i];
        if(this.state.selected_content_id === data.id){
          return data;
        }
        i=i+1;
      }
  }

  getArticle(){
    var _title,_desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      var _data = this.getReadData();
      _article = <ReadContent title={_data.innerText} desc={_data.content}></ReadContent>
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_contentsId = this.max_contentsId+1;
        var _data = this.state.data.concat({
          id:this.max_contentsId, innerText:_title, content:_desc
        });
        this.setState({
          data : _data,
          mode : "read",
          selected_content_id : this.max_contentsId
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _article = <UpdateContent
                    data = {this.getReadData()} 
                    onSubmit={function(_id,_title,_desc){
                      var _data = Array.from(this.state.data);
                      var i=0;
                      while(i<_data.length){
                        if(_id===_data[i].id){
                          _data[i] = {id : _id, innerText:_title, content:_desc}
                          break;
                        }
                        i = i+1;
                      }
                      this.setState({
                        data : _data,
                        mode : "read"
                      });
                    }.bind(this)}>
                 </UpdateContent>
    }

    return _article;
  }


  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          content={this.state.subject.content}
          onChangeMode={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
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
          if(_mode === 'delete'){
            if(window.confirm('정말 삭제하시겠습니까?')){
              var _data = Array.from(this.state.data);
              var i = 0;
              while(i<_data.length){
                if(this.state.selected_content_id === _data[i].id){
                  _data.splice(i,1);
                  break;
                }
                i = i+1;
              }
              this.setState({
                data : _data,
                mode : 'welcome'
              });
              alert('삭제되었습니다!');
            }
          }else{
            this.setState({
              mode : _mode
            });
          }
        }.bind(this)}></Control>
        <br></br>
        {this.getArticle()}
      </div>
    );
  }
}

// **notice**
// 위의 코드들은 '유사 JS'이지, 정확히는 'JS'가 아니다!
// return되는 로직은 반드시 최종적으로 1개의 태그로 감싸주어야 한다.
// 위에서 정의한 태그를 바로 사용하는 모습을 볼 수 있다.


export default App;