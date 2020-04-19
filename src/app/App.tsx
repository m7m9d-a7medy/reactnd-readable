import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { requestGetPosts } from '../store/posts/actions'
import { PostsState } from '../store/posts/types'
import Post from './components/Post/Post'

const mapStateToProps = (state: any, props: any) => {
  return {
    postIds: (state.posts as PostsState).map(p => p.id)
  }
}
const mapDispatchToProps = {
  getPosts() {
    return requestGetPosts(null)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type AppProps = PropsFromRedux & {}

class App extends Component<AppProps, {}> {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div>
        {
          this.props.postIds.map(id => (
            <Post
              key={id}
              id={id}
            />
          ))
        }
      </div>
    )
  }
}

export default connector(App)