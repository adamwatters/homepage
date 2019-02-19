import React from 'react'
import snake from '../images/snake.gif'
import itzana from '../images/itzana.png'
import publicHotel from '../images/public.png'
import siren from '../images/siren.png'
import nametag from '../images/nametag.png'
import bernierobbins from '../images/bernierobbins.png'
import darcy from '../images/darcy.png'
import blueblood from '../images/blueblood.png'
import work from '../images/computer.png'
import styled from '@emotion/styled'
import Hamburger from '../components/hamburger'
import GlobalStyle from '../components/globalStyle'
import { Link } from 'gatsby'

const Work = styled.img`
  width: 220px;
  float: right;
`

const Img = styled.img`
  height: 120px;
  margin: 10px;
`

const Nametag = styled.img`
  width: 100px;
  margin-bottom: 0;
  margin-right: 10px;
  float: left;
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
  background-color: rgba(0, 0, 0, 0.05);
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
const PortfolioPage = ({ location }) => (
  <>
    <GlobalStyle />
    <HeaderContainer>
      <HeaderContent>
        <LinkTitle to="/">Adam Watters</LinkTitle>
        <StyledHamburger originPathname={location.pathname} />
      </HeaderContent>
    </HeaderContainer>
    <WorkPageContainer>
      <Paragraph>
        <Nametag src={nametag} alt="adam watters" />
        I'm a creative engineer with deep experience writing code for the web.
        I've contributed as a full stack developer at a startup, as a frontend
        lead at a digital agency, and as an independent contractor.
      </Paragraph>
      <Paragraph>
        <Work src={work} alt={work} />
        Some of my recent independent projects have included creating a business
        facing dashboard for a{' '}
        <a
          href="https://www.myalice.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          startup making internet connected heating oil tank gauges
        </a>{' '}
        and devising a bit of internet trickery to{' '}
        <a
          href="https://www.youtube.com/watch?v=vexTDlTY6MY"
          target="_blank"
          rel="noopener noreferrer"
        >
          help a mentalist pull of an illusion on Penn and Teller Fool Us
        </a>
        .<br />
        <br />
        At{' '}
        <a href="https://www.youtube.com/watch?v=vexTDlTY6MY">
          Ideawork Studio
        </a>{' '}
        I led a team of five developers in the implemention of web designs,
        mostly for clients in the hotel and restuarant businesses. While there I
        increased development efficiency by automating builds, creating reusable
        components, standardizing processes, and updating infastructure.
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
        Prior to my work at Ideawork I worked at{' '}
        <a href="https://www.theladders.com/">TheLadders</a> where I split my
        time between developing{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.theladders.com/resume-reviewer"
        >
          new tools for job seekers
        </a>
        , improving the search experience, and the core web app.
      </Paragraph>
      <Paragraph>
        <img
          style={{
            float: 'left',
            height: 120,
            marginTop: 4,
            marginRight: 16,
            marginBottom: 0,
            opactiy: 0.5,
          }}
          src={snake}
          alt="snake"
        />
        Before I started writing code professionally, I spent three months at{' '}
        <a href="https://www.recurse.com/">The Recurse Center</a> on a self
        directed educational journey through the world of computing. I learned
        the ins-and-outs of Javascript by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rawgit.com/adamwatters/snake2/master/index.html"
        >
          building games from scratch
        </a>
        , implemented data structures and algorithms, created some web
        applications, and developed a working knowledge of the architecture and
        protocols of the internet.
      </Paragraph>
      <Paragraph>Update Feb 2019</Paragraph>
    </WorkPageContainer>
  </>
)

export default PortfolioPage
