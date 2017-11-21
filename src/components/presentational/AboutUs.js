import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutUs extends Component {
  render() {
    console.log('AboutUs Rendered');
    return (
      <div className='bold'>
        <h2>About Us</h2>
        <Link to={'/adarshsingh1407'}>Main</Link>
      </div>
    )
  }
}

export default AboutUs
