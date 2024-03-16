import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1> This The Home Page</h1>
        <nav>
      <ul>
        <li>
          <Link to="/">School Fee</Link>
        </li>
        <li>
          <Link to="/Agent App">Agent App</Link>
        </li>
        <li>
          <Link to="/Alfa Business App">Alfa Business App</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Home