import React from 'react'
import Link from 'gatsby-link'
import ButtonLink from '../components/ButtonLink'

const Work = (props) => (
    <div>
      <Link to={`/work/${props.slug}`} className="work-sample">
        <div className="work-sample__image">
          <img src={`/static/images/work/${props.thumbnail}`} />
          <div className="overlay">
            <div className="button-link primary small">View project</div>
          </div>
        </div>
        <h6 className="work-sample__category">{props.category}</h6>
        <h3 className="work-sample__title">{props.title}</h3>
      </Link>
    </div>
)

export default Work;