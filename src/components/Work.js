import React from 'react'
import Link from 'gatsby-link'

const Work = (props) => (
    <div>
      <Link to={`/work/${props.slug}`} className="work-sample">
        <img src={`../assets/work/${props.thumbnail}`} />
        <h6 className="work-sample__category">{props.category}</h6>
        <h3 className="work-sample__title">{props.title}</h3>
      </Link>
    </div>
)

export default Work;