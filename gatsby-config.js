module.exports = {
  siteMetadata: {
    title: 'Might & Method',
    description: 'We build digital solutions to help you thrive online.',
    keywords: 'Digital Agency, Website Design, Website Development, Mobile App, Digital Solution',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
