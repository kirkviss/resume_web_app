import React from 'react';
import './App.css';
import CategoryLayer from './CategoryLayer.js'
import { Grid, Grommet, Box, Text, Button} from 'grommet';
import { grommet } from "grommet/themes";
const resume = require('./resume')
const introduction = require('./introduction')


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    }
  }
  render() {

    return (
      <div className="component-app">
        <Grommet full theme={grommet}>
          <Grid
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            areas={[
              {name : "header", start: [0,0], end: [1,0] },
              {name : "sidebar", start: [0,1], end: [0,1] },
              { name: "main", start: [1, 1], end: [1, 1] }
            ]}
          >
            {/* -- Header -- */}
            <Box
              gridArea="header"
              direction="row"
              align="center"
              justify="between"
              pad={{ horizontal: "medium", vertical: "small" }}
              background="brand"
            >
              <Button onClick={() => this.setState({sidebar: !this.state.sidebar})}>
                <Text size="large">Menu</Text>
              </Button>
              <Text>my@email</Text>
            </Box>
            {/* -- Sidebar -- */}
            {this.state.sidebar && (
              <Box
                gridArea="sidebar"
                background="brand"
                width="small"
                animation={[
                  { type: "fadeIn", duration: 300 },
                  { type: "slideRight", size:"xlarge", duration: 150 }
                ]}
              >
                {["First", "Second", "Third"].map(name => (
                  <Button key={name} href="#" hoverIndicator>
                    <Box pad={{ horizontal: "medium", vertical: "small" }}>
                      <Text>{name}</Text>
                    </Box>
                  </Button>
                ))}
              </Box>
            )}
            {/* -- Main --  */}
            <Box 
              gridArea="main"
              justify="center"
              align="center"
              overflow="auto"
            >
              < CategoryLayer content={introduction} size="large" />
              < CategoryLayer content={resume}  size="large"/>
            </Box>
        
          </Grid>

          
        </Grommet>

      </div>
    )
  }
}
