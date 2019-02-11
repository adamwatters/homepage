/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = ({ location }) => {
  console.log(location.pathname)
}

// You can delete this file if you're not using it
