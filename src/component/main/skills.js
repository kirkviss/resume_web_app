import React from 'react';
import { Box, Grid, Text, Heading, Meter } from 'grommet';

// TODO make responsive to screen size change
const SkillChart = ({ label, value }) => (
    <Grid
        id={label}
        columns={["1/4", "3/4"]}
    >
        <Box align='start' size='small' >
            <Text weight='bold' size='medium'>{label}</Text>
            <Text size='small'>{value} Years</Text>
        </Box>
        <Meter
            alginSelf='start'
            type='bar'
            max={2}
            values={[{
                "value": value,
                "highlight": true,
                "label": label
              }]}
            background="neutral-2"
            round
        />
    </Grid>
)

const skillObj = [
    { label: 'Python', value: 1.75 },
    { label: 'Node.js', value: 2 },
    { label: 'MongoDB', value: 1 },
    { label: 'PostgreSQL', value: 1.5 },
    { label: 'RHEL7', value: 2 },
    { label: 'Bash', value: 1.5 },
    { label: 'PowerShell', value: .5 },
    { label: 'C++', value: .5 },
    { label: 'Java', value: .5 }
]

const Skills = (props) => (
    <Box
        {...props}
        id='Technology'
    >
        <Heading
            level={1}
        >Technology</Heading>
        <Box
            direction='column'
            gap='medium'
        >
            {skillObj.map((data) => (
                <SkillChart label={data.label} value={data.value} />
            ))}
        </Box>
    </Box>
)


export default Skills;

// Highly Proficient - Python, Node.js, MongoDB, PostgreSQL
// Proficient - RedHat 7.0, Bash, PowerShell, Window 7/10, C++, Java, VBScript
//             Tools/Frameworks/ Libraries -  Git, Botkit, Splunk, Swagger, Gunicorn, Nginx, Express,
// Mocha, Chai, Sinon, Flask, React, Pytest, Splunk, Knex    