import React from 'react'
import Hamburger from '../components/hamburger'
import Layout from '../components/layout'
import GlobalStyle from '../components/globalStyle'
import { graphql } from 'gatsby'
import './index.css'

const Drawings = ({ location, data }) => {
  const images = data.allDropboxNode.edges.map(edge => {
    const { name } = edge.node.localFile
    const { src } = edge.node.localFile.childImageSharp.resize
    return <img src={src} alt={name} />
  })
  console.log(images)
  return (
    <Layout>
      <GlobalStyle />
      <Hamburger className="links-image" originPathname={location.pathname} />
      {images}
    </Layout>
  )
}

export const query = graphql`
  query {
    allDropboxNode {
      edges {
        node {
          localFile {
            name
            childImageSharp {
              resize(width: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default Drawings
