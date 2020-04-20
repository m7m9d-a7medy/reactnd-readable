import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../store/posts/actions'
import { getCategories } from '../store/categories/actions'
import { Switch, Route, BrowserRouterProps } from 'react-router-dom'
import Home from './routes/Home'
import NewPost from './components/NewPost/NewPost'
import EditPost from './components/EditPost/EditPost'
import Post from './components/Post/Post'

const mapDispatchToProps = {
  getPosts() {
    return getPosts(null)
  },
  getCategories() {
    return getCategories()
  }
}

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type AppProps = PropsFromRedux & BrowserRouterProps & {}

const App = (props: AppProps) => {
  const { getCategories, getPosts } = props

  useEffect(() => {
    getPosts()
    getCategories()
  }, [getCategories, getPosts])

  return (
    <Switch>
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        path='/posts/new'
        component={NewPost}
      />
      <Route
        path='/posts/edit/:id'
        component={EditPost}
      />
      <Route
        path='/posts/view/:id'
        component={Post}
      />
    </Switch>
  )
}

export default connector(App)