import React from 'react'
import { Link } from 'gatsby'
import hamburger from '../images/hamburger.png'

const Hamburger = ({ originPathname, className }) => (
  <Link state={{ originPathname }} to="/links">
    <img className={className} src={hamburger} alt="hamburger" />
  </Link>
)

export default Hamburger
