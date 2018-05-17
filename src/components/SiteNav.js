import React from 'react'
import Link from 'gatsby-link'

//import './sitenav.scss'

const SiteNav = () => (
  <div className="sitenav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page-2">Page 2</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/404">404</Link></li>
    </ul>
  </div>
)

export default SiteNav