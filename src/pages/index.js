import React from 'react'
import snake from '../images/snake.gif'
import itzana from '../images/itzana.png'
import publicHotel from '../images/public.png'
import siren from '../images/siren.png'
import bernierobbins from '../images/bernierobbins.png'
import darcy from '../images/darcy.png'
import blueblood from '../images/blueblood.png'
import work from '../images/computer.png'
import styled from '@emotion/styled'
import Hamburger from '../components/hamburger'
import GlobalStyle from '../components/globalStyle'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Work = styled.img`
  width: 100px;
  float: right;
  margin-left: 10px;
  margin-bottom: 0;
  @media (min-width: 600px) {
    width: 220px;
  }
`

const Img = styled.img`
  height: 120px;
  margin: 10px;
`

const WorkPageContainer = styled.div`
  background-color: rgb(0, 0, 0, 0);
  top: 80px;
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Paragraph = styled.div`
  max-width: 800px;
  margin-bottom: 16px;
  width: 100%;
`
const Images = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.1);
  padding-top: 30px;
  margin-bottom: 36px;
  position: relative;
`

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

const HeaderContent = styled.div`
  height: 100%;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-decoration: none;
`

const LinkTitle = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 30px;
`

const StyledHamburger = styled(Hamburger)`
  height: 60px;
  margin: 0;
`

const PortfolioLink = ({ url, src, alt }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <Img src={src} alt={alt} />
    </a>
  )
}
const Home = ({ location }) => (
  <Layout>
    <GlobalStyle />
    <HeaderContainer>
      <HeaderContent>
        <LinkTitle to="/">
          <h1 style={{ marginBottom: '0' }}>Adam Watters</h1>
        </LinkTitle>
        <StyledHamburger originPathname={location.pathname} />
      </HeaderContent>
    </HeaderContainer>
    <WorkPageContainer>
      <Paragraph>
        <h3>Creative Web Engineer</h3>
      </Paragraph>
      <Paragraph>
        <h4>Recent Doings</h4>
        <Work src={work} alt={work} />
        <ul style={{ marginBottom: '0' }}>
          <li>
            {' '}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=adam-watters.vscode-color-pick&ssr=false#overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Color Pick - the only VSCode color picker that works everywhere
              and has no dependencies.
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://ukiyo-e.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              An Algolia powered search app for exploring the Metropolitan
              Museum's collection of Japanese woodblock prints.
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://github.com/stefanjudis/netlify-menubar/pull/14"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributing to an open source Electron App for managing sites
              deployed to Netlify
            </a>
          </li>
          <li>
            <a
              href="https://www.myalice.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              A React/Redux based dashboard for a startup making internet
              connected heating oil tank gauges
            </a>{' '}
          </li>
          <li>
            A bit of internet trickey to help a mentalist{' '}
            <a
              href="https://www.youtube.com/watch?v=vexTDlTY6MY&t=41s"
              target="_blank"
              rel="noopener noreferrer"
            >
              pull of an illusion on Penn and Teller Fool Us.
            </a>{' '}
            I used React to build a pixel perfect replica of the iOS contacts
            app in the browser.
          </li>
          <li>
            Non-Technical: helped build{' '}
            <a
              href="https://timberhomesllc.com/timberhomes-completes-class-of-1978-bunkhouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              a beautiful bunkhouse in the White Mountains of New Hampshire
            </a>{' '}
            and{' '}
            <a
              href="https://habitatnyc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              affordable housing in New York City.
            </a>
          </li>
        </ul>
        <Paragraph>
          <h4 style={{ marginTop: '30px' }}>
            Lead Developer at{' '}
            <a
              href="https://www.ideawork.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ideawork Studios
            </a>{' '}
            - Feb 2017 to April 2018.
          </h4>
          <ul style={{ marginBottom: '0' }}>
            <li>
              Lead a team of five developers building React powered websites for
              hotels and restaurants.
            </li>
            <li>
              Built reusable components, starter boilerplates, and tools to help
              my teammates
            </li>
            <li>
              Updated and maintained a proprietary CMS with an Express backend
              and React/Redux UI
            </li>
          </ul>
        </Paragraph>
      </Paragraph>
      <Images>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            textAlign: 'center',
            top: 6,
            fontSize: 12,
            color: 'grey',
          }}
        >
          A sampling of sites we built during my time at Ideawork
        </div>
        <PortfolioLink
          src={bernierobbins}
          url={'https://www.bernierobbins.com/men/watches?PRICE=1000-2499'}
          alt={'bernierobbins'}
        />
        <PortfolioLink
          src={siren}
          url={'http://www.sirenbyrw.com/'}
          alt={'siren'}
        />
        <PortfolioLink
          src={darcy}
          url={'https://www.thedarcyhotel.com/neighborhood'}
          alt={'darcy'}
        />
        <PortfolioLink
          src={itzana}
          url={
            'http://www.itzanabelize.com/the-resort/overview/destination/resort/ceviche-bar'
          }
          alt={'itzana'}
        />
        <PortfolioLink
          src={blueblood}
          url={'http://www.bluebloodsteakhouse.com/team/hospitality/mixologist'}
          alt={'blueblood'}
        />
        <PortfolioLink
          src={publicHotel}
          url={'https://www.publichotels.com/eat-and-drink'}
          alt={'publicHotel'}
        />
      </Images>
      <Paragraph>
        <h4>
          I spent most of 2016 learning
          {` `}
          <a
            href="https://www.heartwoodschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            woodworking and traditional carpentry
          </a>
          , but I completed a few technical projects
        </h4>
        <img
          style={{
            float: 'right',
            height: 160,
            marginTop: 0,
            marginLeft: 36,
            marginBottom: 0,
            opactiy: 0.5,
          }}
          src={snake}
          alt="snake"
        />
        <ul style={{ marginBottom: '0' }}>
          <li>
            <a
              href="https://github.com/adamwatters/tiny_library"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built a Rails powered library catalogue for the craft school where
              I was living and working
            </a>
          </li>
          <li>
            <a
              href="https://www.health-kick.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Helped launch Healthkick - an incentivized marketplace of branded
              fitness and wellness offerings.
            </a>
          </li>
          <li>
            <a
              href="https://pixelsnake.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wrote a pretty slick (IMO) implementation of Snake for the browser
            </a>
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <h4 style={{ marginTop: '20px' }}>
          Frontend Engineer at{' '}
          <a
            href="https://www.theladders.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheLadders.com
          </a>{' '}
          - Dec 2014 to Dec 2015
        </h4>
        <ul style={{ marginBottom: '0' }}>
          <li>
            <a
              href="https://www.theladders.com/resume-reviewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built tools for creating and reviewing resumes
            </a>
          </li>
          <li>
            <a
              href="https://www.theladders.com/jobs/new-york-ny-jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed new SEO optimized job search result pages
            </a>
          </li>
          <li>Updated and maintained an existing Backbone.js SPA</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <h4 style={{ marginTop: '20px' }}>
          <a
            href="https://www.recurse.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Recurse Center
          </a>{' '}
          (like a writer's retreat, but for programmers) - Fall 2014
        </h4>
        <ul style={{ marginBottom: '0' }}>
          <li>
            Pair programmed in a diverse community full of engineers, academics,
            and artists
          </li>
          <li>
            <a
              href="https://javascriptsorts.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learned about algorithms by implementing them
            </a>
          </li>
          <li>Started to understand how the internet works</li>
        </ul>
      </Paragraph>
      <Paragraph>
        If you need all this information in a more conventional package,{' '}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          you can find my resume here.
        </a>
      </Paragraph>
      <Paragraph>
        <h3 style={{ marginTop: '20px' }}>
          That is all. Say hi at{' '}
          <a
            href="mailto:adamwatters11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            adamwatters11@gmail.com
          </a>
          .
        </h3>
        .
      </Paragraph>
    </WorkPageContainer>
  </Layout>
)

export default Home
