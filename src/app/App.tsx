import React, { useEffect, Fragment } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../store/posts/actions'
import { getCategories } from '../store/categories/actions'
import { Switch, Route, BrowserRouterProps, Redirect } from 'react-router-dom'
import NewPost from './routes/NewPost/NewPost'
import EditPost from './components/EditPost/EditPost'
import Post from './components/PostCard/PostCard'
import Head from './components/Head/Head'
import Layout from './components/Layout/Layout'
import Posts from './routes/Posts/Posts'

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
            exact path='/posts'
            component={Posts}
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
            path='/posts/:id'
            component={Post}
          />
          <Redirect to='posts/#all' />
        </Switch>
      </Layout>
    </Fragment>
  )
}

export default connector(App)