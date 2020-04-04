import React from 'react';
import './App.css';
import CategoryLayer from './CategoryLayer.js'
import NavBarBox from './NavBar'
import { Grid, Grommet, Box, Text, Button, Layer, Heading } from 'grommet';
import { grommet } from "grommet/themes";
import { introduction, resume } from '../content'
import { FormClose, Menu } from "grommet-icons";
var figlet = require('figlet');

export default class App extends React.Component {
  constructor(props) {

    super(props);
    this.mobileLengthLimit = 680;
    this.updateIsMobile = this.updateIsMobile.bind();
    this.state = {
      navbar: false,
      navBarDestinations: ["Intro", "Experience", "Technologies", "Projects"],
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
              justify="center"
              fill={true}
              direction="row"
              background="neutral-2"
            >

              <Box
                margin='xlarge'
              >
                <Heading
                  level={4}
                  size='large'
                  margin={{ 'vertical': 'xsmall' }}

                > k>$ source greet_guest.sh </Heading>
                <Heading level={1} size='large' margin={{ 'vertical': 'xsmall' }} textAlign='start'>{figlet.text('Boo!', {
                  font: 'Ghost',
                  horizontalLayout: 'default',
                  verticalLayout: 'default'
                }, function (err, data) {
                  if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                  }
                  console.log(data);
                })} </Heading>
                <Heading level={2} size='small' margin={{ 'vertical': 'xsmall' }}> And I like to build things...</Heading>
                <Heading level={5} size='small' margin={{ 'vertical': 'xsmall' }}> I am software engineer who is constantly looking for new technologies to master and to build cool new things. </Heading>
                {/*TODO create contract button here  */}
              </Box>
              <Box>

              </Box>
            </Box>

          </Grid>


        </Grommet>

      </div>
    )
  }
}
