import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Link style={{ paddingTop: '20px' }} to="/">
      {`<< back`}
    </Link>
    <h2 style={{ paddingTop: '20px' }}>elsewhere</h2>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/adamwatters"
    >
      Github
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/adam.watters/?hl=en"
    >
      Instagram
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://medium.com/@adamwatters11"
    >
      Medium
    </a>
  </Layout>
)

export default SecondPage
