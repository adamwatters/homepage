require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Adam Watters',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-dropbox`,
      options: {
        accessToken: process.env.DROPBOX_TOKEN,
        recursive: false,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134428657-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
