import React, { Component } from 'react';

class UpdateContent extends Component{
    render(){
      console.log(this.props.data);
      return (
        <article>
          <h2>Update</h2>
          <form action="/update-process"
                method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                  );
                }.bind(this)}
          >
            <p><input type="text" placeholder="title" name="title" defaultValue={this.props.data.innerText}></input></p>
            <p><textarea placeholder="description" name="desc" defaultValue={this.props.data.content}></textarea></p>
            <p><input type="submit" value="submit"></input></p>
          </form>
        </article>
      );
    }
  }

  export default UpdateContent;