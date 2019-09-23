// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide
} from 'spectacle'

import styled from 'styled-components'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import Weather from './weather'

// Require CSS
require('normalize.css')
require('./assets/fonts.css')

const colors = {
  primary: '#FFFFFF',
  secondary: '#660080',
  tertiary: '#78B31E',
  quaternary: '#BFFF5E',
  light: '#DF5EFF',
  extraLight: '#E478FF',
  background: '#121212'
}

const theme = createTheme(colors, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

const assets = {
  start: require('./assets/start.gif'),
  dedays: require('./assets/dedays.png'),
  bg: require('./assets/bg.gif'),
  bgTrack: require('./assets/track.gif'),
  bgRoad: require('./assets/road.gif'),
  bgInno: require('./assets/innobg.gif'),
  internet: require('./assets/internet.gif'),
  europa: require('./assets/europa.jpg'),
  parcbit: require('./assets/parcbit.jpg'),
  rogers: require('./assets/rogers.jpg'),
  plano: require('./assets/parcbitplano.png'),
  companies: require('./assets/companies.png'),
  time: require('./assets/time.gif')
}

const Title = styled.p`
  font-family: 'outrun_futureregular';
  font-size: 8rem;
  color: ${colors.primary};
  text-shadow: 2px 2px 30px ${colors.secondary},
    0.6rem 0.6rem ${colors.quaternary};
`

const TextLine = styled.span`
  font-family: 'zigregular';
  font-size: 2rem;
  color: ${colors.primary};
  background-color: ${colors.background};
  padding: 0.6rem;
`

const StyledListItem = styled(ListItem)`
  font-family: 'zigregular';
  color: ${colors.primary};
  padding: 0.6rem;
`

const CoolQuote = styled.span`
  font-family: 'zigregular';
  font-size: 4rem;
  color: ${colors.primary};
  background-color: ${colors.background};
  padding: 0.6rem;
`

const CoolCite = styled.p`
  font-family: 'outrun_futureregular';
  font-size: 3rem;
  color: ${colors.primary};
  text-shadow: 2px 2px 15px ${colors.secondary},
    0.3rem 0.3rem ${colors.quaternary};
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['none']}
        transitionDuration={500}
        theme={theme}
        progress="none">
        <Slide bgColor="secondary">
          <Image src={assets.dedays} />
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="primary" lineHeight={1.2}>
            Welcome to the Balearic Islands 🏝
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            Forecast
          </Heading>
          <Weather />
        </Slide>
        <Slide bgColor="secondary" bgImage={assets.start}></Slide>
        <Slide
          transitionIn={['spin', 'zoom']}
          transitionOut={['none']}
          bgImage={assets.bg}>
          <Title>De:Days</Title>
          <TextLine>2019</TextLine>
        </Slide>
        <Slide transition={['none']} bgImage={assets.bg}>
          <Title>alvaromb</Title>
          <TextLine>General Manager @ Fundació Bit</TextLine>
        </Slide>
        <Slide transition={['none']} bgImage={assets.bg}>
          <Title>Fundació Bit</Title>
          <TextLine>What's our purpose?</TextLine>
        </Slide>
        <Slide transition={['none']} bgImage={assets.bg}>
          <Title>Fundació Bit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>ParcBit</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>R & D</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Innovation</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide
          transitionIn={['spin', 'slide']}
          transitionOut={['none']}
          bgImage={assets.bgTrack}>
          <Title>ParcBit</Title>
        </Slide>
        <Slide bgImage={assets.bgTrack}>
          <Title>ParcBit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>Opened 2002</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>15min away from Palma</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>close to the university</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>269k m2</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide
          bgImage={assets.bgTrack}
          transitionIn={['fade', 'slide']}
          transitionOut={['none']}>
          <Image src={assets.rogers} />
          <TextLine>Project by Richard Rogers</TextLine>
        </Slide>
        <Slide
          bgImage={assets.bgTrack}
          transitionIn={['fade', 'slide']}
          transitionOut={['none']}>
          <Image src={assets.plano} />
        </Slide>
        <Slide
          bgImage={assets.bgTrack}
          transitionIn={['fade', 'slide']}
          transitionOut={['none']}>
          <Image src={assets.parcbit} alt="By Eden Exposito" />
          <TextLine>Eden Exposito (c)</TextLine>
        </Slide>
        <Slide bgImage={assets.bgTrack}>
          <Title>ParcBit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>175+ companies</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>1B revenue</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>employs 3000+ people</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={assets.bgTrack}>
          <Title>ParcBit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>Biotech, tourism, chemistry, ITC</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Blazing fast internet</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Centrebit menorca</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Room for growth</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide bgImage={assets.bgTrack}>
          <Title>ParcBit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>Tech hub for Balearic islands</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgRoad}>
          <Title>R and D</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>IT infrastructure</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Software</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>skunkworks: blockchain, AI, CV</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgRoad}>
          <BlockQuote>
            <CoolQuote>Push digital innovation into the Government</CoolQuote>
            <CoolCite>R and D</CoolCite>
          </BlockQuote>
        </Slide>
        <Slide
          transitionIn={['spin']}
          transitionOut={['fade']}
          bgImage={assets.bgInno}>
          <Title>Innovation</Title>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Innovation</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>softlanding & support for investors</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>information & consultancy for R&D</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>Startup incubator #emprenbit</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>#emprenbit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>infra + support various stages</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>access for funding</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>low cost workspace</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>connection to entrepreneurs</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Image src={assets.companies} />
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Sun and Data</Title>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Sun and Data</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>a laboratory for innovation</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>bring tech companies to balearics</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Sun and Data</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>best connected islands in the world</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>amazing quality of life</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Image src={assets.time} />
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Fundació Bit</Title>
          <List>
            <StyledListItem bulletStyle=">">
              <TextLine>@fundaciobit</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>@emprenbit</TextLine>
            </StyledListItem>
            <StyledListItem bulletStyle=">">
              <TextLine>@parcbit</TextLine>
            </StyledListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgImage={assets.bgInno}>
          <Title>Thank you!</Title>
        </Slide>
      </Deck>
    )
  }
}
