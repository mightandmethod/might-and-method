import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import Sidebar from '../components/Sidebar'

// Assets
import 'typeface-work-sans'
import 'typeface-butler'
import favicon from '../assets/images/favicon.png'

// Stylesheets
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <div
      className="mm"
      style={{
        display: 'flex',
        width: '100%'
      }}
    >
      <Sidebar />
      <div
        style={{
          marginLeft: '17%',
          padding: '2em'
        }}
      >
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
