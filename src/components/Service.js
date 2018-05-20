import React from 'react'
import Link from 'gatsby-link'

const Service = (props) => (
    <div>
      <Link to={`/services/${props.href}`} className="service-item">
        <h5>{props.label}</h5>
        <p>{props.desc}</p>
      </Link>
    </div>
)

export default Service;