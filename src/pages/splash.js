import React from 'react'
import Helmet from 'react-helmet'

import logo from '../assets/images/logo-red.svg'

const Splash = () => (
  <div className="home-main">
    <div className="wrapper">
      <div className="hero hero-splash">
        <img className="big-m" src={logo} alt="Might & Method" style={{ width: '20vw' }} />
        <h1><span>Coming Soon</span></h1>
      </div>
    </div>
  </div>
)

export default Splash
