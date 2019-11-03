import React from 'react';
import { Box, Grid, Markdown } from 'grommet';
import { isModuleSpecifier } from '@babel/types';
// const path = require('path');
const fs = require('fs');

const ComponentFrame = () => (
    <Grid>
        <Box align='center' pad='large' />
    </Grid>
);

class textBox extends React.Component {
    render() {
        // const resumePath = path.join(__dirname, 'mrkdwn/resume.js')
        // const resumePath = '../mrkdwn/resume.js'
        const resumeString = fs.readFile('../mrkdwn/resume.js', 'utf8');
        return () => (
            <Grid>
                <Box align='center' pad='large'>
                    <Markdown>
                        {
                            `# Out of Breath

You know, sometimes in life it seems like there's no way out. Like
a sheep trapped in a maze designed by wolves.

[reference](#)`}
                    </Markdown>>
            </Box>
            </Grid>
        )
    }

}


 module.export = {
     "textBox": textBox
 }