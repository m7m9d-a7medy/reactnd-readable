import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { requestGetPosts } from './store/posts/actions'

const mapStateToProps = (state: any) => state
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
        App
      </div>
    )
  }
}

export default connector(App)