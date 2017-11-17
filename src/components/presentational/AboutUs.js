import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutUs extends Component {
  render() {
    return (
      <div className='bold'>
        <h2>About Us</h2>
        <Link to={'/'}>Main</Link>
      </div>
    )
  }
}

export default AboutUs
