import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
  <footer id="footer">
    <div className="footer__sidebar">
      <div>
        <h1>&amp;</h1>
        <ul>
          <li>Indianapolis</li>
          <li>Nashville</li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; { new Date().getFullYear() } Might &amp; Method</p>
        <p>All rights reserved.</p>
      </div>
    </div>
    <div className="footer__content">
      <div className="content__wrap">
        <div>
          <h4>Let's chat</h4>
          <p><a href="mailto:cheers@mightandmethod.com">cheers@mightandmethod.com</a></p>
          <p>We proudly hail from the wonderful midwestern oases of Indianapolis, IN and Nashville, TN. If you’re in town(s), we’d love to grab a beer and get to know you.</p>
        </div>

        <div>
          <h4>Might & Method</h4>
          <ul>
            <li><Link to="/about">Who we are</Link></li>
            <li><Link to="/services">What we do</Link></li>
            <li><Link to="/work">Work showcase</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Socialize</h4>
          <ul>
            <li><a href="https://twitter.com/mightandmethod">Twitter</a></li>
            <li><a href="https://instagram.com/mightandmethod">Instagram</a></li>
            <li><a href="https://dribbble.com/mightandmethod">Dribbble</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer