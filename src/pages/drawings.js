import React from 'react'
import Hamburger from '../components/hamburger'
import Layout from '../components/layout'
import GlobalStyle from '../components/globalStyle'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import './index.css'

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 120px;
  width: 100%;
  max-width: 1500px;
  @media (min-width: 600px) {
    margin-top: 100px;
  }
`

const Drawings = ({ location, data }) => {
  const images = data.allDropboxNode.edges.map(edge => {
    const { name } = edge.node.localFile
    const { src } = edge.node.localFile.childImageSharp.resize
    return <img src={src} alt={name} />
  })
  return (
    <Layout>
      <GlobalStyle />
      <Hamburger className="links-image" originPathname={location.pathname} />
      <ImgContainer>{images}</ImgContainer>
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
              resize(width: 320) {
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
