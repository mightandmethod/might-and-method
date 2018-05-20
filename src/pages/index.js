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
import ServicesWrapper from '../components/ServicesWrapper'
import Service from '../components/Service'

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
        <section className="home-main">
          <div className="wrapper">
            <div className="hero">
              <h1>We build digital solutions to help your company <span>thrive.</span></h1>
              <div className="hero__links">
                <ButtonLink
                  href="/contact"
                  size="large"
                  text="Let's get started"
                />
                <a href="#work">
                  Learn more about us <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </div> 
            </div>
            <img src={scroll} alt="Scroll for more" className="scroll" />
          </div>
        </section>

        <section className="services">
          <header>
            <h2>What we do</h2>
            <p>Your company has a story to tell. We can help you build a successful strategy from start to finish to share it as effectively as possible. Check out some of our services below to learn more about how we can work together to create something awesome!</p>
          </header>
          <ServicesWrapper>
            <Service
              label="Website, mobile, & user experience design"
              desc="The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore. We specialize in internet marketing strategy, online advertising, web marketing and conversion."
              href="web"
            />
            <Service
              label="Digital product design & development"
              desc="The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore. We specialize in internet marketing strategy, online advertising, web marketing and conversion."
              href="digital"
            />
            <Service
              label="Brand strategy, identity, & digital marketing"
              desc="The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore. We specialize in internet marketing strategy, online advertising, web marketing and conversion."
              href="marketing"
            />
            <Service
              label="Let's create something new together"
              desc="The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore. We specialize in internet marketing strategy, online advertising, web marketing and conversion."
              href="marketing"
            />
          </ServicesWrapper>
        </section>

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