import React from 'react'
import Layout from '../Components/Layout/Layout'
import About from '../Components/About/About'
import Repos from '../Components/Repos/Repos'
import Contact from '../Components/Contact/Contact'

const App = () => {
  return (
    <>
        <Layout>
            <About />
            <Repos />
            <Contact />
        </Layout>
    </>
  )
}

export default App
