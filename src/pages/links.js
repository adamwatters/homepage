import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import GlobalStyle from '../components/globalStyle'

const SecondPage = ({ location }) => {
  const originPathname = location.state && location.state.originPathname
  return (
    <Layout>
      <GlobalStyle />
      {originPathname && (
        <Link style={{ paddingTop: '20px' }} to={originPathname}>
          {`go back`}
        </Link>
      )}
      {originPathname !== '/' && (
        <Link style={{ paddingTop: '20px' }} to="/">
          {`home`}
        </Link>
      )}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/adamwatters"
      >
        github
      </a>
      {originPathname !== '/drawings' && (
        <Link style={{ paddingTop: '20px' }} to="/drawings">
          {`drawings`}
        </Link>
      )}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/adam.watters/?hl=en"
      >
        instagram
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@adamwatters11"
      >
        medium
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instructables.com/member/adamwatters/instructables/"
      >
        instructables
      </a>
    </Layout>
  )
}

export default SecondPage
