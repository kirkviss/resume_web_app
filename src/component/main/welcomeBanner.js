import React from 'react';
import {  Box, Heading } from 'grommet';
var figlet = require('figlet');

const WelcomeBanner = (props) => (
    
    <Box
        id="Intro"
        {...props}
    >
        <Heading
            level={4}
            size='large'
            margin={{ 'vertical': 'xsmall' }}

        > k>$ source greet_guest.sh </Heading>
        <Heading level={1} size='large'  margin={{ 'vertical': 'xsmall' }} textAlign='start'>{figlet.text('Boo!', {
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
);


export default WelcomeBanner;