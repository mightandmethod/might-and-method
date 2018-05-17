import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__logo">
      <Link to="/">
        <img
          src={logo}
          alt=""
          style={{
            width: '50px'
          }}
        />
      </Link>
    </div>

    <div className="sidebar__tagline">
      <h6>Might &amp;<br/>Method</h6>
      <p>We build custom digital solutions to help you thrive online</p>
    </div>

    <div></div>
  </div>
)

export default Sidebar