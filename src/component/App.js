import React from 'react';
import '../static/App.css';
import {
  WelcomeBanner,
  Experience,
  Education,
  Skills
} from './doc_layers'
import NavBarBox from './NavBar'
import { Grid, Grommet, Box, Text, Button, Layer } from 'grommet';
import { grommet } from "grommet/themes";
import { FormClose, Menu } from "grommet-icons";


export default class App extends React.Component {
  constructor(props) {

    super(props);
    this.mobileLengthLimit = 680;
    this.updateIsMobile = this.updateIsMobile.bind();
    this.state = {
      navbar: false,
      navBarDestinations: ["Intro", "Experience", "Education"],
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
        <Grommet full theme={grommet}>
          <Grid
            fill
            columns={['auto', 'flex']}
            rows={['auto', 'flex']}
            areas={[
              { name: "header", start: [0, 0], end: [1, 0] },
              { name: "main", start: [0, 1], end: [1, 1] },
            ]}

          >
            {/* -- header & navbar-- */}
            <Box
              gridArea="header"
              direction="row"
              align="center"
              justify="between"
              pad={{ horizontal: "medium", vertical: "medium" }}
              background="brand"
            >
              <Text>Logo</Text>
              {this.state.isMobile ? (
                <Button
                  onClick={() => this.setState({ navbar: !this.state.navbar })}
                  icon={<Menu />}
                />
              ) : (
                  <NavBarBox references={this.state.navBarDestinations} direction="row" justify="end" />
                )}

            </Box>

            {/* -- Sidebar -- */}
            {this.state.navbar && (
              <Layer
                full="vertical"
                position="right"
                onEsc={this.state.navbar}
                onClickOutside={() => this.setState({ navbar: !this.state.navbar })}
                responsive={false}
                background="brand"
                animation={[
                  { type: "fadeIn", duration: 300 },
                  { type: "slideLeft", size: "large", duration: 150 }
                ]}
              >
                <Box
                  fill
                  direction="row"
                  elevation="small"
                  background="brand"
                  justify="between"
                  pad={{ "horizontal": "large" }}
                >
                  <NavBarBox references={this.state.navBarDestinations} />
                  <Button
                    alignSelf="start"
                    onClick={() => this.setState({ navbar: !this.state.navbar })}
                    icon={<FormClose />} />
                </Box>
              </Layer>
            )}

            {/* -- Main --  */}
            <Box
              gridArea="main"
              background="neutral-2"
              overflow="auto"
              pad="small"
              gap="small"
              align="center"
            >

              <Grid
                columns={{
                  count: 1,
                  size: "auto"
                }}
                gap="xsmall"
                align="center"
                // justify='start'

              >
                <WelcomeBanner

                  // align="center"
                  margin='large' />
                <Experience
                  // align="center"
                  margin='large' />
                <Education
                  // align="center"
                  margin='large' />
                <Skills
                     margin='large'/>
              </Grid>
            </Box>

          </Grid>


        </Grommet>

      </div>
    )
  }
}
