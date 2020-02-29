import React, { Component } from 'react';

class Subject extends Component{
    render(){
      return (
        <header>
          <h1><a href="/" 
                 onClick={function(e){
                     e.preventDefault();
                     this.props.onChangeMode();
                 }.bind(this)}>{this.props.title}</a></h1>
          {this.props.content}
        </header>
      );
    }
  }

  export default Subject;