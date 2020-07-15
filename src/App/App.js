import React from 'react'
import Layout from '../Components/Layout/Layout'
import About from '../Components/About/About'
import Repos from '../Components/Repos/Repos'

const App = () => {
  return (
    <>
        <Layout>
            <About />
            <Repos 
              title='My latest repositories'
            />
        </Layout>
    </>
  )
}

export default App
