import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.githib.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clarke',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class ListData extends Component{
  render(){
    return(
      <Fragment>
      <h1>Data Rendering from JSON</h1>
      <ul>
        {list.map(item => 
          <li>
            <div>ID: {item.objectID}</div>
            <div>Subject Title: <a href={item.url}>{item.title}</a></div>
            <div>Author Name: {item.author}</div>
            <div>Comments: {item.num_comments}</div>
            <div>Points Earned: {item.points}</div>            
          </li>          
        )}
      </ul>
      </Fragment>
    )
  }
}

ReactDOM.render(<ListData />, document.getElementById('root'))