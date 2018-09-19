import React from 'react';
import { connect } from 'react-redux';


class BlogForm extends React.Component {
  state = { title: '', content: '' }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, content } = this.state
    const blog = { title, content, id, complete: false }
    dispatch({ type: 'ADD_BLOG', blog })
    dispatch({ type: 'INC_ID' })
    this.setState({ title: '', content: ''})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { title } = this.state.title
    const { content } = this.state.content

    return (
      <div>
        <h3>Create A New Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="title"
            value={title} 
            placeholder="Title" 
            onChange={this.handleChange} 
            required 
          />
          <input 
            value={content} 
            name="content"
            placeholder="Content" 
            onChange={this.handleChange} 
            required 
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);