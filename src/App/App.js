import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import Home from '../Containers/Home/Home'
import Projects from '../Containers/Projects/Project'
import Contact from '../Containers/Contact/Contact'

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default App
