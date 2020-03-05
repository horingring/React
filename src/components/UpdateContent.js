import React, { Component } from 'react';

class UpdateContent extends Component{
constructor(props){
  super(props);
  this.state = {
    id : this.props.data.id,
    title : this.props.data.innerText,
    desc : this.props.data.content
  }
  this.inputFormHandler = this.inputFormHandler.bind(this);
}

    inputFormHandler(e){
      this.setState({[e.target.name] : e.target.value});
    }

    render(){
      return (
        <article>
          <h2>Update</h2>
          <form action="/update-process"
                method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                  );
                }.bind(this)}>
            <p>
              <input type="hidden" name="id" value={this.state.id}></input>
            </p>      
            <p>
              <input 
                type="text" 
                placeholder="title" 
                name="title"
                value={this.state.title}
                onChange={this.inputFormHandler}>
               </input>
            </p>
            <p>
              <textarea 
                placeholder="description" 
                name="desc" 
                value={this.state.desc}
                onChange={this.inputFormHandler}>
              </textarea>
            </p>
            <p>
              <input type="submit" value="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;