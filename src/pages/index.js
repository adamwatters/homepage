import React from 'react'
import Layout from '../components/layout'
import nametag from '../images/nametag.png'
import pizza from '../images/pizza.png'
import girlanddog from '../images/girlanddog.png'
import links from '../images/links.png'
import { Link } from 'gatsby'
import './index.css'

const IndexPage = () => (
  <Layout>
    <Link to="/links">
      {' '}
      <img className="links-image" src={links} alt="links" />
    </Link>
    <img className="nametag-image" src={nametag} alt="adam watters" />
    <img src={pizza} alt="eating pizza" />
    <img src={girlanddog} alt="girl and dog" />
  </Layout>
)

export default IndexPage
