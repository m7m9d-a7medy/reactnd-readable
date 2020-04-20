import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../store/posts/actions'
import { getCategories } from '../store/categories/actions'
import Post from './components/Post/Post'
import NewPost from './components/NewPost/NewPost'
import EditPost from './components/EditPost/EditPost'
import Comment from './components/Comment/Comment'
import { State } from '../store/types'
import { getComments } from '../store/comments/actions'

const mapStateToProps = (state: State, props: any) => {
  return {
    postIds: state.posts?.map(p => p.id),
    commentIds: state.comments?.map(p => p.id)
  }
}

const mapDispatchToProps = {
  getPosts() {
    return getPosts(null)
  },
  getCategories() {
    return getCategories()
  },
  getComments(id: string) {
    return getComments(id)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type AppProps = PropsFromRedux & {}

class App extends Component<AppProps, {}> {
  componentDidMount() {
    this.props.getPosts()
    this.props.getCategories()
  }

  state = {
    postId: ''
  }

  render() {
    return (
      <div>
        {
          this.props.postIds?.map(id => (
            <div key={id} onClick={() => {
              this.props.getComments(id)
              this.setState({ postId: id })
            }}>
              <Post
                id={id}
              />
            </div>
          ))
        }
        <NewPost />
        <EditPost id='' />
        {
          this.props.commentIds?.map(id => (
            <Comment
              key={id}
              id={id}
              parentId={this.state.postId}
            />
          ))
        }
      </div>
    )
  }
}

export default connector(App)