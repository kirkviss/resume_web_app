import React from 'react';
import './App.css';
import CategoryLayer from './CategoryLayer.js'
import { Grid, Grommet, Box, Text, Button, Layer } from 'grommet';
import { grommet } from "grommet/themes";
import { introduction, resume } from '../content'
import { FormClose, Menu } from "grommet-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    }
  }
  render() {

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
              // {name : "sidebar", start: [1,1], end: [1,1] }

            ]}

          >
            {/* -- Header -- */}
            <Box
              gridArea="header"
              direction="row"
              align="center"
              justify="between"
              pad={{ horizontal: "medium", vertical: "medium" }}
              background="brand"
            >
              <Text>kirkviss@gmail.com</Text>
              <Button 
                onClick={() => this.setState({ navbar: !this.state.navbar })} 
                icon={<Menu /> }
              />


            </Box>
            {/* -- Sidebar -- */}


            {this.state.navbar && (
              <Layer
                full="vertical"
                position="right"
                onEsc={this.state.navbar}
              >
                <Box
                  direction="row"
                  align="center"
                  as="header"
                  elevation="small"
                  background="brand"
                  justify="between"
                >

                  <Button 
                    onClick={() => this.setState({ navbar: !this.state.navbar })}
                    icon={<FormClose />} />
                </Box>
                <Box
                  fill
                  overflow="auto"
                  background="brand"
                  width="small"
                  animation={[
                    { type: "fadeIn", duration: 300 },
                    { type: "slideLeft", size: "large", duration: 150 }
                  ]}
                >
                  {["First", "Second", "Third"].map(label => (
                    <Button
                      hoverIndicator
                      plain
                    >
                      <Box
                        key={label}
                        href="#"

                        pad={{ horizontal: "medium", vertical: "medium" }}
                      >
                        <Text size="large"> {label}</Text>

                      </Box >
                    </Button>
                  ))}

                </Box>
              </Layer>
            )}




            {/* -- Main --  */}
            <Box
              gridArea="main"
              justify="stretch"
              align="center"
              fill
              flex
              direction='column'

            >
              < CategoryLayer content={introduction} />
              < CategoryLayer content={resume} />
            </Box>

          </Grid>


        </Grommet>

      </div>
    )
  }
}
