import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Waypoint from 'react-waypoint'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'

import scroll from '../assets/images/scroll.svg'

import ButtonLink from '../components/ButtonLink'
import WorkSamples from '../components/WorkSamples'
import Work from '../components/Work'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {/* <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint> */}
        <div className="home-main">
          <section className="wrapper">
            <div className="hero">
              <h1>We build digital solutions to help your company <span>thrive.</span></h1>
              <div className="hero__links">
                <ButtonLink
                  href="/contact"
                  size="large"
                  text="Let's get started"
                />
                <a href="#work">
                  See some of our work <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </div> 
            </div>
            <img src={scroll} alt="Scroll for more" className="scroll" />
          </section>
        </div>

        <WorkSamples>
          <Work
            category="ui/ux design"
            title="J&J Financial"
            slug="jj-financial"
            thumbnail={'jjf/1.jpg'}
          />
          <Work
            category="ui/ux design"
            title="J&J Financial"
            slug="jj-financial"
            thumbnail={'jjf/1.jpg'}
          />
          <Work
            category="ui/ux design"
            title="J&J Financial"
            slug="jj-financial"
            thumbnail={'jjf/1.jpg'}
          />
          <Work
            category="ui/ux design"
            title="J&J Financial"
            slug="jj-financial"
            thumbnail={'jjf/1.jpg'}
          />
        </WorkSamples>
      </div> // React containment div
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`