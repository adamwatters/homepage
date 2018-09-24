import React from 'react'
import Layout from '../components/layout'
import nametag from '../images/nametag.png'
import girlanddog from '../images/girlanddog.png'

const IndexPage = () => (
  <Layout>
    <img src={nametag} alt="adam watters" />
    <img src={girlanddog} alt="girl and dog" />
  </Layout>
)

export default IndexPage
