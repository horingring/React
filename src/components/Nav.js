import React, { Component } from 'react';

class Nav extends Component{
    shouldComponentUpdate(newProps){
        if(this.props.data === newProps.data){
          return false;
        }else{
          return true;
        }
      };
    render(){
        console.log('===> Nav render 실행');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
        lists.push(<li key={data[i].id}>
                        <a 
                          href={data[i].id+".html"}
                          data-id={data[i].id}
                          onClick={function(e){
                              e.preventDefault();
                              this.props.onChangeMode(e.target.dataset.id);
                          }.bind(this)}
                        >{data[i].innerText}</a>
                   </li>);
            i = i+1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
  }

  export default Nav;