// Core
import React, {PropTypes} from 'react'
import Link from 'gatsby-link'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Emerge } from 'react-emergence'
import { animateScroll as scroll, scroller } from 'react-scroll'

// Assets
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'
import faLongArrowAltRight from '@fortawesome/fontawesome-free-solid/faLongArrowAltRight'
import heroBG from '../../public/static/images/herobg.jpg'
import scrollSvg from '../assets/images/scroll.svg'

// Components
import ButtonLink from '../components/ButtonLink'
import WorkSamples from '../components/WorkSamples'
import Work from '../components/Work'
import ServicesWrapper from '../components/ServicesWrapper'
import Service from '../components/Service'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      loading: '',
    }
  }

  componentDidMount = () => {
    this.image = new Image();
    this.image.src = heroBG;
    this.image.onload = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({ loading: 'loaded' });
  }

  scrollTo(elem) {
    scroller.scrollTo(elem, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -95
    })
  }

  switchTabs(tab) {
    this.setState(() => ({ tabIndex: tab }));
  }

  render() {
    return (
      <div>        
        <section className="home-main container">
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
            <div className="container flex scroll-wrapper">
              <img src={scrollSvg} alt="Scroll for more" className="scroll" />
            </div>
          </div>
        </section>

        <div
          className={`hero-bg ${this.state.loading}`}
          style={{
            backgroundImage: `url(${heroBG})`,
          }}
        />

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
            <div className="tab-navigation">
              <TabList className="service-tabs__tab-list">
                <Tab className="service-tabs__tab">1. Discover your story</Tab>
                <Tab className="service-tabs__tab">2. Build your brand</Tab>
                <Tab className="service-tabs__tab">3. Craft your online presence</Tab>
                <Tab className="service-tabs__tab">4. Delight your customers</Tab>
              </TabList>
            </div>

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
            href="/how"
            size="small"
            type="primary"
            text="Explore our process"
            hasArrow
          />

          <div className="content">
            <header>
              <Emerge>
                <h1>About Might & Method</h1>
              </Emerge>

              <Emerge>
                <p>In a nutshell of sorts, <span>Might & Method</span> is a digital agency, but we like to think of ourselves as digital alchemists &mdash; we convert <span>pixels</span> into <span>magic</span>. We have served many successful brands and created hundreds of websites and products over our <span>{(parseInt(new Date().getFullYear()) - 2010) * 2} years</span> of industry experience.</p>
              </Emerge>
            </header>

            <Emerge>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <a href="javascript:(0);" onClick={() => this.scrollTo('work-section')}>
                  See who we've helped <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </div>
            </Emerge>
          </div>
        </section>

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