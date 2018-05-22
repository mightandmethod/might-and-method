import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo-red.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideMobileNav: ''
    }
  }
  
  toggleSidenav() {
    var css = (this.state.showHideMobileNav === '' ? "toggled" : '');
    this.setState({"showHideMobileNav":css});
  }

  render() {
    return (
      <div>
        <nav id="nav" className={this.props.sticky ? 'sticky' : ''}>
          <Link to="/" style={{ lineHeight: 1 }}>
            <img
              src={logo}
              alt="Might & Method"
              style={{
                width: '40px'
              }}
            />
          </Link>

          <ul className="menu">
            <li>
              <Link to="/services">What we do</Link>
            </li>
            <li>
              <Link to="/work">Our work</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          
          <a onClick={this.toggleSidenav.bind(this)} className={`mobile-menu ${this.state.showHideMobileNav}`}>
            <ul className="buns">
              <li className="bun" />
              <li className="bun" />
            </ul> 
          </a>
        </nav>
        {/* <Sidenav className={this.props.showHideSidenav} /> */}
      </div>
    );
  }
}

export default Nav