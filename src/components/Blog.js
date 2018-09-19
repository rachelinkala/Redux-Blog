import React from 'react';
import { connect } from 'react-redux';
import { delteBlog } from '../reducers/blogs'

const Blog = ({ id, title, content, complete, dispatch }) => (
  <li>
    <h4><b>{title}</b></h4>
    <br />
    <h4>{content}</h4>
    <button onClick={ () => dispatch(deleteBlog(id)) }>Delete</button>
    ___________________________________________________
  </li>
)

export default connect()(Blog)