import React, { useEffect, Fragment } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../store/posts/actions'
import { getCategories } from '../store/categories/actions'
import { Switch, Route, BrowserRouterProps } from 'react-router-dom'
import Home from './routes/Home/Home'
import NewPost from './components/NewPost/NewPost'
import EditPost from './components/EditPost/EditPost'
import Post from './components/Post/Post'
import Head from './components/Head/Head'
import Layout from './components/Layout/Layout'

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
    <Fragment>
      <Head />
      <Layout>
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
      </Layout>
    </Fragment>
  )
}

export default connector(App)