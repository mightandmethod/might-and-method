import React, { PropTypes } from 'react'
import BackgroundImage from '../components/BackgroundImage'

import bgImage from '../../public/static/images/startup-desktop.jpg'

const HowPage = () => (
  <div>
    <section className="how-hero container bg-overlay">
      <div className="flex">
        <h1>Testing</h1>
      </div>
    </section>
    <BackgroundImage imgUrl={bgImage} />

    <div className="content-body">
      <section className="plan" name="plan-section">
        <header>
          <h2>It takes more than just having a website to conquer your market, but creating an effective digital marketing strategy shouldn't keep you up at night. We're here to help.</h2>  

          <div className="flex">
            <p>Having a website is important, don't get us wrong, but it's only one piece of an effective, engaging digital marketing strategy. We've created a simple, proven process to enhance your brand, create a beautiful website, and delight your customers.</p>

            <p>Leave behind the complexity, cost, and confusion of agencies, website builders, or trying to do it all yourself. Take control of your company's future with Might &amp; Method at your side.</p>
          </div>
        </header>
      </section>
    </div>
  </div>
)

HowPage.propTypes = {
  route: PropTypes.object,
}

export default HowPage
