import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return (
        <article>
          <h2>Create</h2>
          <form action="/create-process"
                method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                  );
                }.bind(this)}
          >
            <p><input type="text" placeholder="title" name="title"></input></p>
            <p><textarea placeholder="description" name="desc"></textarea></p>
            <p><input type="submit" value="submit"></input></p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;