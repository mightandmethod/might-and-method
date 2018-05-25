//. Core
import React, {PropTypes} from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Waypoint from 'react-waypoint'
import { Emerge } from 'react-emergence'
import { animateScroll as scroll, scroller } from 'react-scroll'

// Assets
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'
import faLongArrowAltRight from '@fortawesome/fontawesome-free-solid/faLongArrowAltRight'
import heroBG from '../../public/static/images/herobg.jpg'
import scrollSvg from '../assets/images/scroll.svg'

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
      stickyNav: false,
      tabIndex: 0,
      loading: '',
    }
  }

  handleImageLoaded() {
    this.setState({ loading: 'loaded' });
  }

  scrollTo(elem) {
    scroller.scrollTo(elem, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -90
    })
  }

  switchTabs(tab) {
    this.setState(() => ({ tabIndex: tab }));
  }

  _handleWaypointEnter = () => {
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
              <h1><span>We simplify marketing</span> <span>so your company will</span> <span className="bold">thrive.</span></h1>
              <div className="hero__links">
                <ButtonLink
                  href="/start"
                  size="large"
                  text="Let's get started"
                />
                <a href="javascript:(0);" onClick={() => this.scrollTo('plan-section')}>
                  See how we can help you <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </div> 
            </div>
            <img src={scrollSvg} alt="Scroll for more" className="scroll" />
          </div>
        </section>

        <div className="hero-bg">
          <img
            className={this.state.loading}
            src={heroBG}
            onLoad={this.handleImageLoaded.bind(this)}
          />
        </div>

        <div className="content-body">

        <section className="plan" name="plan-section">
          <header>
            <Emerge>
              <h2>It takes more than just having a website to conquer your market, but creating an effective digital marketing strategy shouldn't keep you up at night. We're here to help.</h2>  
            </Emerge>

            <div className="flex">
              <Emerge>
                <p>Having a website is important, don't get us wrong, but it's only one piece of an effective, engaging digital marketing strategy. We've created a simple, proven process to enhance your brand, create a beautiful website, and delight your customers.</p>
              </Emerge>

              <Emerge>
                <p>Leave behind the complexity, cost, and confusion of agencies, website builders, or trying to do it all yourself. Take control of your company's future with Might &amp; Method at your side.</p>
              </Emerge>
            </div>
          </header>

          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
            className="service-tabs"
            selectedTabClassName="service-tabs__tab--selected"
            selectedTabPanelClassName="service-tabs__panel--selected"
          >
            <TabList className="service-tabs__tab-list">
              <Tab className="service-tabs__tab">1. Discover your story</Tab>
              <Tab className="service-tabs__tab">2. Build your brand</Tab>
              <Tab className="service-tabs__tab">3. Craft your online presence</Tab>
              <Tab className="service-tabs__tab">4. Delight your customers</Tab>
            </TabList>

            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Champion your customers; become their champion.</h3>
                  <p>Our process starts with some simple questions to create a storyboard-like narrative for your company and your customers. This becomes the engine that will drive your brand, communication, and website. It'll create razor focus for us in the next steps, and it's a lot of fun!</p>
                  <a href="javascript:(0);"
                    onClick={() => this.switchTabs(1)}
                    className="button-link secondary mini has-arrow"
                  >Next <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                </div>
                <div>
                  <div className="plan-image discover">
                    <img src="/static/images/discover.jpg" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Brand is more than just a logo.</h3>
                  <p>We'll review your current branding through the lens of your story and help perfect (or create!) it. The goal is to create a personality for your company that will resonate the most with your customers. We'll go over your logo and colors, but just as importantly, your communication style, voice, and vibe.</p>
                  <a href="javascript:(0);"
                    onClick={() => this.switchTabs(2)}
                    className="button-link secondary mini has-arrow"
                  >Next <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                </div>
                <div>
                  <div className="plan-image brand">
                    <img src="/static/images/brand.jpg" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Convert pixels into magic.</h3>
                  <p>We'll hand-craft a kick-butt, speedy-as-heck, drop-dead-gorgeous website for your company that perfectly distills your shiny new brand and story which you and your customers will love. But why stop there? We can even help you create more effective email campaigns and generate more leads. The sky's the limit!</p>
                  <a href="javascript:(0);"
                    onClick={() => this.switchTabs(3)}
                    className="button-link secondary mini has-arrow"
                  >Next <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                </div>
                <div>
                  <div className="plan-image online">
                    <img src="/static/images/online.jpg" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="service-tabs__panel">
              <div>
                <div>
                  <h3>Turn your customers into raving fans.</h3>
                  <p>Drumming up new business is one thing, but creating brand loyalty is the dream. When you've given your customers the gift of delight, they'll keep coming back for more. We'll show you how to use all these fancy new tools in your belt to delight their socks off.</p>
                  <p style={{ fontWeight: '800', fontSize: '0.8em' }}>Are you ready to create something awesome together?</p>
                  <ButtonLink
                    href="/start"
                    type="secondary"
                    text="Let's do this thing!"
                  />
                </div>
                <div>
                  <div className="plan-image delight">
                    <img src="/static/images/delight.jpg" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </section>

        <section className="about">
          <ButtonLink
            href="/work"
            size="small"
            type="primary"
            text="Explore our work"
            hasArrow
          />

          <div className="content">
            <header>
              <Emerge>
                <h1>About Might & Method</h1>
              </Emerge>

              <Emerge>
                <p>In a nutshell of sorts, <span>Might & Method</span> is a digital agency, but we prefer to think of ourselves as digital alchemists. We convert pixels into magic for you and your customers. The secret’s in the sauce, baby.</p>
              </Emerge>
            </header>

            <Emerge>
              <h2>How We Work</h2>
            </Emerge>

            <Emerge>
            <p>Our ultimate goal is to create something that meets your needs while delighting your customers. If we were to put a Venn diagram of that statement here, it would look something like two slightly different-colored circles — one labeled “Meets your needs”, the other labeled “Delights your customers” — overlapping in the middle, and it’d say “The Sweet Spot” or something like that. But you get the idea. Unless you’ve never seen a Venn diagram, in which case, congrats.</p>
            </Emerge>

            <div className="grid">
              <div className="row">
              <Emerge>
                <div>
                  <h3>Getting to know you & your company</h3>
                  <p>Every final product should be a truthful reflection of your business, so we dig into your goals, processes, resources, opportunities and limitations. Think of us as the tailor taking every measurement on your new pair of silky smooth pants before you wear them in public. Looking good.</p>
                </div>
                </Emerge>
                <Emerge>
                <div>
                  <h3>Understanding your customers</h3>
                  <p>Sure, we said "audience" up there, but we're talking about people, people! We help you understand the distinct individuals who make up your target audience so you can discover how to guide them from "maybe" to "yes"—to "yes" yet again.</p>
                </div>
                </Emerge>
              </div>

              <div className="row">
              <Emerge>
                <div>
                  <h3>Defining opportunities for growth</h3>
                  <p>We're committed to giving you exactly what you want, but more than that, we aim to define goals first and determine the best course of action to meet them. We identify where potential solutions overlap with customers' dilemmas to drive a winning strategy.</p>
                </div>
                </Emerge>
                <Emerge>
                <div>
                  <h3>Build the dang thing<span>&trade;</span></h3>
                  <p>We define a clear process, identify specific needs for execution and set a step-by-step timeline. Those sound a little rigid, we know, but we also know that steps in a process can pivot, needs can change and key dates move. We execute because we adapt. We're limber folks—for the most part.</p>
                </div>
                </Emerge>
              </div>
            </div> {/* /grid */}

            <Emerge>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <a href="javascript:(0);" onClick={() => this.scrollTo('work-section')}>
                  See what we've created <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </div>
            </Emerge>
          </div>
        </section>

        {/* <section className="services">
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
        </section> */}

        <section className="work" name="work-section">
          <header>
            <h2>Recent Partnerships</h2>
            <Link to="/work">See more of our work <FontAwesomeIcon icon={faLongArrowAltRight} /></Link>
          </header>

          <WorkSamples>
            <Work
              category="ui/ux design"
              title="J&J Financial"
              slug="jj-financial"
              thumbnail={'1.png'}
            />
            <Work
              category="mobile web design"
              title="Pilot AutoSystems"
              slug="pilot"
              thumbnail={'2.png'}
            />
            <Work
              category="web app"
              title="Asyncy"
              slug="asyncy"
              thumbnail={'3.png'}
            />
            <Work
              category="ui/ux design"
              title="J&J Financial"
              slug="jj-financial"
              thumbnail={'4.png'}
            />
            <div style={{
              width: '1px',
              minWidth: '1px',
              maxWidth: '1px'
            }}>&nbsp;</div>
          </WorkSamples>
        </section>
        </div>
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