import React from 'react'
import Layout from '../components/layout'
import nametag from '../images/nametag.png'
import pizza from '../images/pizza.png'
import drew from '../images/drew.png'
import girlanddog from '../images/girlanddog.png'
import joe from '../images/joepearl.png'
import me from '../images/me.png'
import kiss from '../images/kissing.png'
import bobby from '../images/bobby.png'
import hamburger from '../images/hamburger.png'
import { Link } from 'gatsby'
import './index.css'

const IndexPage = () => (
  <Layout>
    <Link to="/links">
      {' '}
      <img className="links-image" src={hamburger} alt="hamburger" />
    </Link>
    <img className="nametag-image" src={nametag} alt="adam watters" />
    <img src={me} alt="me" />
    <img src={kiss} alt="kiss" />
    <img src={bobby} alt="bobby" />
    <img src={drew} alt="man with mushroom pizza" />
    <img src={joe} alt="joe presenting granola bar" />
    <img src={girlanddog} alt="girl and dog" />
    <img src={pizza} alt="eating pizza" />
  </Layout>
)

export default IndexPage
