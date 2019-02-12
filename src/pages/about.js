import React from 'react'
import snake from '../images/snake.gif'
import bladejump from '../images/bladejump.png'
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
import { Link } from 'gatsby'

const Work = styled.img`
  width: 220px;
  float: right;
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
`
const Images = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(0, 0, 0, 0.1);
  padding-top: 30px;
  margin-bottom: 36px;
  position: relative;
`

const Img = styled.img`
  height: 120px;
  margin: 10px;
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

const PortfolioPage = ({ location }) => (
  <>
    <HeaderContainer>
      <HeaderContent>
        <LinkTitle to="/">Adam Watters</LinkTitle>
        <StyledHamburger originPathname={location.pathname} />
      </HeaderContent>
    </HeaderContainer>
    <WorkPageContainer>
      <Paragraph>
        <Nametag src={nametag} alt="adam watters" />I am a technically
        sophisticated creator with deep experience writing code for the web.
        I've contributed as a full stack developer at a startup, as a lead
        developer at a digital agency, and as an independent contractor.
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
        I led a team of five developers in the pixel perfect implemention of web
        designs, mostly for clients in the hotel and restuarant businesses.
        While there I increased development efficiency by automating builds,
        creating reusable components, standardizing processes, and updating
        infastructure.
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bernierobbins.com/men/watches?PRICE=1000-2499"
        >
          <Img src={bernierobbins} alt="bernierobbins" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.sirenbyrw.com/"
        >
          <Img src={siren} alt="siren" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.thedarcyhotel.com/neighborhood"
        >
          <Img src={darcy} alt="bernierobbins" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.itzanabelize.com/the-resort/overview/destination/resort/ceviche-bar"
        >
          <Img src={itzana} alt="itzana" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.bluebloodsteakhouse.com/team/hospitality/mixologist"
        >
          <Img src={blueblood} alt="blueblood" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.publichotels.com/eat-and-drink"
        >
          <Img src={publicHotel} alt="public" />
        </a>
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
      <Paragraph>
        <img
          style={{
            float: 'right',
            height: 120,
            marginTop: 4,
            marginRight: 16,
            marginBottom: 0,
            opactiy: 0.5,
          }}
          src={bladejump}
          alt="bladejump"
        />
        Outside of my life as a programmer, I've worked as carpenter, a high
        school shop and technology instructor, and an ESL teacher. I'm a
        marathon runner and an avid rollerblader.
      </Paragraph>
    </WorkPageContainer>
  </>
)

export default PortfolioPage
