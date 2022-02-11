import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';

function Comment(props){

    return(
        <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={Faker.image.image()}/>
      <div class="header">
        {props.name}
      </div>
      <div class="meta">
        {props.type}
      </div>
      <div class="description">
        {props.name} requested permission to view your contact details
      </div>
    </div>
    
  </div>
  </div>
    )
}
export default Comment;