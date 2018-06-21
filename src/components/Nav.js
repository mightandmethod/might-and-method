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
      <nav id="nav" className={this.props.sticky ? 'sticky' : ''}>
        <Link to="/" style={{ lineHeight: 1 }} className="logo">
          <img
            src={logo}
            alt="Might & Method"
            style={{
              width: '40px'
            }}
          />
        </Link>

        <ul className={`menu ${this.state.showHideMobileNav}`}>
          <li>
            <Link to="/who">Who we're for</Link>
          </li>
          <li>
            <Link to="/how">How it works</Link>
          </li>
          <li>
            <Link to="/what">What we offer</Link>
          </li>
          <li>
            <Link to="/start">Get started</Link>
          </li>
        </ul>
        
        <a onClick={this.toggleSidenav.bind(this)} className={`mobile-menu ${this.state.showHideMobileNav}`}>
          <ul className="buns">
            <li className="bun" />
            <li className="bun" />
          </ul> 
        </a>
      </nav>
    );
  }
}

export default Nav