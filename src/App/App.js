import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import About from '../Pages/About'
import Projects from '../Pages/Projects'

const App = () => {
  return (
    <>
    <Router>
      <Layout>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route exact path='/projects' component={Projects}/>
          </Switch>
      </Layout>
    </Router>
    </>
  )
}

export default App
