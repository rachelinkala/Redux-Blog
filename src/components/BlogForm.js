import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  state = { title: '', content: '' }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { title } = this.state.title
    const { content } = this.state.content
    dispatch({ type: 'CREATE_BLOG', blog: title, blog: content })
    this.setState({ title: '', content: ''})
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value, content: e.target.value})
  }

  render() {
    const { title } = this.state.title
    const { content } = this.state.content

    return (
      <div>
        <h3>Create A New Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={title} onChange={this.handleChange} />
          <input value={content} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect()(BlogForm);