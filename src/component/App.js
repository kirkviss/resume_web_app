import React from 'react';
import './App.css';
import CategoryLayer from './CategoryLayer.js'
import { Grid, Grommet, Box, Text, Button} from 'grommet';
import { grommet } from "grommet/themes";
import { introduction, resume } from '../content'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    }
  }
  render() {

    return (
      <div className="component-app">
        <Grommet full theme={grommet}>
          <Grid
            fill
            columns={['auto','flex']}
            rows={['auto','flex']}
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
              pad={{ horizontal: "medium", vertical: "medium" }}
              background="brand"
            >
              <Button onClick={() => this.setState({sidebar: !this.state.sidebar})}>
                <Text size="large">Kirk Visser</Text>
              </Button>
              <Text>kirkviss@gmail.com</Text>
            </Box>
            {/* -- Sidebar -- */}
            {this.state.sidebar && (
              <Box
                gridArea="sidebar"
                background="brand"
                width="small"
                animation={[
                  { type: "fadeIn", duration: 300 },
                  { type: "slideRight", size:"large", duration: 150 }
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
              justify="stretch"
              align="center"
              fill
              flex
              direction='column'
              
            >
              < CategoryLayer content={introduction} />
              < CategoryLayer content={resume}  />  
            </Box>
        
          </Grid>

          
        </Grommet>

      </div>
    )
  }
}
