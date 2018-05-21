//. Core
import React, {PropTypes} from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Waypoint from 'react-waypoint'

// Assets
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'
import scroll from '../assets/images/scroll.svg'
import discoverDrawing from '../assets/images/discover-story.svg'
import brandDrawing from '../assets/images/build-brand.svg'
import onlineDrawing from '../assets/images/craft-online-presence.svg'
import delightDrawing from '../assets/images/delight-customers.svg'

// Components
import Nav from '../components/Nav'
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
        <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          >
          </Waypoint>
        <Nav sticky={this.state.stickyNav} />
        
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
            <h2>Your company has a story to tell. We help you build a successful strategy from start to finish to share it as effectively as possible.</h2>
          </header>

          <Tabs
            className="service-tabs"
            selectedTabClassName="service-tabs__tab--selected"
            // forceRenderTabPanel
            selectedTabPanelClassName="service-tabs__panel--selected"
          >
            <TabList className="service-tabs__tab-list">
              <Tab className="service-tabs__tab">Discover your story</Tab>
              <Tab className="service-tabs__tab">Build your brand</Tab>
              <Tab className="service-tabs__tab">Craft your online presence</Tab>
              <Tab className="service-tabs__tab">Delight your customers</Tab>
            </TabList>

            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Here's a title</h3>
                  <p>Your company has a story to tell. We can help you build a successful strategy from start to finish to share it as effectively as possible. Check out some of our services below to learn more about how we can work together to create something awesome!</p>
                  <ButtonLink
                    href="/contact"
                    type="secondary"
                    text="Let's get started"
                  />
                </div>
                <div>
                  <img src={discoverDrawing} className="drawing" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Here's a second title</h3>
                  <p>Your company has a story to tell. We can help you build a successful strategy from start to finish to share it as effectively as possible. Check out some of our services below to learn more about how we can work together to create something awesome!</p>
                  <ButtonLink
                    href="/contact"
                    type="secondary"
                    text="Let's get started"
                  />
                </div>
                <div>
                  <img src={brandDrawing} className="drawing" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Here's a third title</h3>
                  <p>Your company has a story to tell. We can help you build a successful strategy from start to finish to share it as effectively as possible. Check out some of our services below to learn more about how we can work together to create something awesome!</p>
                  <ButtonLink
                    href="/contact"
                    type="secondary"
                    text="Let's get started"
                  />
                </div>
                <div>
                  <img src={onlineDrawing} className="drawing" />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Titles are fun and cool and stuff</h3>
                  <p>Your company has a story to tell. We can help you build a successful strategy from start to finish to share it as effectively as possible. Check out some of our services below to learn more about how we can work together to create something awesome!</p>
                  <ButtonLink
                    href="/contact"
                    type="secondary"
                    text="Let's get started"
                  />
                </div>
                <div>
                  <img src={delightDrawing} className="drawing" />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </section>

        <section className="about">
          <ButtonLink
            href="/contact"
            size="small"
            type="primary"
            text="Explore our work"
            hasArrow
          />
          <div className="content">
            <header>
              <h1>About Might & Method</h1>
              <p>In a nutshell of sorts, <span>Might & Method</span> is a digital agency, but we prefer to think of ourselves as digital alchemists. We convert pixels into magic for you and your customers. The secret’s in the sauce, baby.</p>
            </header>

            <h2>How We Work</h2>
            <p>Our ultimate goal is to create something that meets your needs while delighting your customers. If we were to put a Venn diagram of that statement here, it would look something like two slightly different-colored circles — one labeled “Meets your needs”, the other labeled “Delights your customers” — overlapping in the middle, and it’d say “The Sweet Spot” or something like that. But you get the idea. Unless you’ve never seen a Venn diagram, in which case, congrats.</p>

            <div className="grid">
              <div className="row">
                <div>
                  <h3>Getting to know you & your company</h3>
                  <p>Every final product should be a truthful reflection of your business, so we dig into your goals, processes, resources, opportunities and limitations. Think of us as the tailor taking every measurement on your new pair of silky smooth pants before you wear them in public. Looking good.</p>
                </div>

                <div>
                  <h3>Understanding your customers</h3>
                  <p>Sure, we said "audience" up there, but we're talking about people, people! We help you understand the distinct individuals who make up your target audience so you can discover how to guide them from "maybe" to "yes"—to "yes" yet again.</p>
                </div>
              </div>

              <div className="row">
                <div>
                  <h3>Defining opportunities for growth</h3>
                  <p>We're committed to giving you exactly what you want, but more than that, we aim to define goals first and determine the best course of action to meet them. We identify where potential solutions overlap with customers' dilemmas to drive a winning strategy.</p>
                </div>

                <div>
                  <h3>Build the dang thing&trade;</h3>
                  <p>We define a clear process, identify specific needs for execution and set a step-by-step timeline. Those sound a little rigid, we know, but we also know that steps in a process can pivot, needs can change and key dates move. We execute because we adapt. We're limber folks—for the most part.</p>
                </div>
              </div>
            </div> {/* /grid */}

            <div style={{ width: '100%', textAlign: 'center' }}>
              <Link to="/services">
                See how we can help your company <FontAwesomeIcon icon={faArrowDown} />
              </Link>
            </div>
          </div>
        </section>

        <section className="services">
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

        {/*<WorkSamples>
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
        */}
      </div> // React containment div
    )
  }
}

Index.propTypes = {
  route: PropTypes.object,
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