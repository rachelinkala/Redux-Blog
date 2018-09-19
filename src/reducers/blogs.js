const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    // case 'DELETE_BLOG':
    //   return state.filter( => t.id !== action.id)
    // default:
      return state
  }
}

export default blogs;