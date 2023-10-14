import React from 'react'
import Layout from './Layout.jsx'
import { Link } from 'react-router-dom'
import './index.css'



function App() {
  
  return (
    <Layout>
      <div className="homepage">
        <div className="home-text">
          <h1 className='home-h1'>Generation Thailand</h1>
          <h2 className='home-h2'>React - Assessment</h2>
        </div>
        <div className="btn-role">
          <Link to='/user'><button className='btn-user'>User</button></Link>
          <Link to='/admin'><button className='btn-admin'>Admin</button></Link>
        </div>
      </div>
    </Layout>
  )
}

export default App
