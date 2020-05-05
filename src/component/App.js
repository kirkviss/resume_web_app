import React from 'react';
import '../static/App.css';
import {
  WelcomeBanner,
  Experience,
  Education,
  Skills,
  Contact,
  Footer
} from './main'
import { NavBar } from './title_bar'
import {
  Grid,
  Grommet,
  Button,
  Layer,
  Box,
} from 'grommet';
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { FormClose, Menu, SubtractCircle, AddCircle } from "grommet-icons";

const customFocus = deepMerge(grommet, {

  button: {
    padding: {
      horizontal: undefined
    },
    border: {
      radius: undefined,
    }
  },
  anchor: {
    color: 'accent-2'
  },
  accordion: {
    heading: { level: "3" },
    icons: {
      collapse: SubtractCircle,
      expand: AddCircle,
      color: "brand"
    },
    border: undefined
  },
  global: {

    hover: {
      color: 'black',
      background: {
        color: 'accent-1',
        opacity: 0.9
      }

    },
    colors: {
      text: 'light-6',
      background: 'black',
      nav: 'black',
      customHighlight: 'accent-1'
    }
  }
});

export default class App extends React.Component {
  constructor(props) {

    super(props);
    this.mobileLengthLimit = 680;
    this.updateIsMobile = this.updateIsMobile.bind();
    this.state = {
      navbar: false,
      navBarDestinations: ["Intro", "Experience", "Education", "Technology"],
      isMobile: window.innerWidth < this.mobileLengthLimit
    }
  }

  updateIsMobile = () => {
    this.setState({
      isMobile: window.innerWidth < this.mobileLengthLimit
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateIsMobile);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  };


  render() {
    console.log(this.state.isMobile)
    return (
      <div className="component-app">
        <Grommet full theme={customFocus}>
          <Grid
            fill
            columns={['xsmall', 'flex']}
            rows={['xsmall', 'flex']}
            areas={[
              ['contact', 'header'],
              ['contact', 'main']
            ]}
          >

            {/* -- header & navbar-- */}
            <Box
              gridArea="header"
              direction="row"
              pad={{  vertical: "small", horizontal:'none' }}
              background="nav"
              justify='end'
            >
              {this.state.isMobile ? (
                <Button
                  onClick={() => this.setState({ navbar: !this.state.navbar })}
                  icon={<Menu />}
                />
              ) : (
                  <NavBar references={this.state.navBarDestinations} direction="row" algin="end" />
                )}

            </Box>

            {/* -- Sidebar -- */}
            
            {this.state.navbar && (
              // TODO refactor this so that when a button is pressed the menus despairs 
              <Layer
                full="vertical"
                position="right"
                onEsc={this.state.navbar}
                onClickOutside={() => this.setState({ navbar: !this.state.navbar })}
                responsive={true}
                animation={[
                  { type: "fadeIn", duration: 300 },
                  { type: "slideLeft", size: "medium", duration: 150 }
                ]}
              >
                <Box
                  fill
                  direction="row"
                  elevation="small"
                  justify="end"
                  pad={{ "horizontal": "large" }}
                  background='background'
                  algin='end'
                >
                  <NavBar references={this.state.navBarDestinations} />
                  <Button
                    alignSelf="start"
                    onClick={() => this.setState({ navbar: !this.state.navbar })}
                    icon={<FormClose />} />
                </Box>
              </Layer>
            )}

            {/* -- Contact --  */}

            <Contact gridArea='contact' />
            {/* -- Main --  */}
            <Box
              gridArea="main"
              overflow="auto"
              background='main_background'
            >

              <Grid
                algin='center'
                rows={['large', 'auto', 'auto', 'auto']}
              >
                <WelcomeBanner
                  margin='large'
                />
                <Experience
                  margin='large'
                  pad={{
                    right: 'xlarge'
                  }}
                />
                <Education
                  margin='large'
                  pad={{
                    right: 'xlarge'
                  }} />
                <Skills
                  margin='large'
                  id='Technology' />
                <Footer
                  margin='large'
                />
              </Grid>
            </Box>
          </Grid>


        </Grommet>

      </div>
    )
  }
}

