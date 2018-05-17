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

    <div className="sidebar__nav">
      
    </div>

    <div className="sidebar__footer">
      <section>
        <div>
          <h1>&amp;</h1>
          <ul>
            <li>Indianapolis</li>
            <li>Nashville</li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; { new Date().getFullYear() }</p>
          <p>All rights reserved.</p>
        </div>
      </section>
    </div>
  </div>
)

export default Sidebar