import React from 'react'
import Layout from '../components/layout'
import nametag from '../images/nametag.png'
import pizza from '../images/pizza.png'
import girlanddog from '../images/girlanddog.png'
import links from '../images/links.png'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Link to="/links">
      {' '}
      <img
        style={{
          position: 'absolute',
          height: '200px',
          top: '0',
          right: '30px',
        }}
        src={links}
        alt="links"
      />
    </Link>
    <img src={nametag} alt="adam watters" />
    <img src={pizza} alt="eating pizza" />
    <img src={girlanddog} alt="girl and dog" />
  </Layout>
)

export default IndexPage
