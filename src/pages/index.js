import React from 'react'
import Link from 'gatsby-link'

import ButtonLink from '../components/ButtonLink'

const IndexPage = () => (
  <div className="content">
    <h1>We can help your organization <span>do more</span></h1>
    <div style={{
      display: 'flex'  
    }}>
      <ButtonLink
        href="/contact"
        size="large"
        text="Let's get started"
      />
      <a href="#work">See some of our work <i className="fa fa-caret-down"></i></a>
    </div> 
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
