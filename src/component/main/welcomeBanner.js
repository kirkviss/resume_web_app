import React from 'react';
import {  Box, Heading, Text} from 'grommet';
var figlet = require('figlet');

const WelcomeBanner = (props) => (
    
    <Box
        id="Intro"
        {...props}
        alignSelf='center'
        margin='xlarge'
    >
        <Heading
            algin='start'
            level={4}
            pad='none'
            margin='none'
            color='customHighlight'
        > Hello world... I am</Heading>
        <Heading pad='none' margin='none' size='large' color='white '>Kirk Visser</Heading>
        <Heading pad='none' margin='none' color='dark-3'>I like to build things</Heading>
        <Text  margin={{ 'vertical': 'xsmall' }}> I am a software engineer currently located in the New York City metropolitan area. <br/>
        I am a full stack developer that is interested in everything from <br/>front end development to back end architecture.</Text>
        {/*TODO create contract button here  */}
    </Box>
);


export default WelcomeBanner;