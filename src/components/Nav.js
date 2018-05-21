import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo-red.svg'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'sticky' : ''}>
    <Link to="/" style={{ lineHeight: 1 }}>
      <img
        src={logo}
        alt="Might & Method"
        style={{
          width: '40px'
        }}
      />
    </Link>

    <ul>
      <li>
        <Link to="/services">What we do</Link>
      </li>
      <li>
        <Link to="/work">Our work</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav