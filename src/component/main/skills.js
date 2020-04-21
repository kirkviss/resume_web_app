import React from 'react';
import { Box, Chart, Text, Heading } from 'grommet';

const SkillChart = ({ label, value }) => (
    <Box
        flex={false}
        basis="xsmall"
        align="center"
        gap="small"
        id={label}
    >
        <Chart
            bounds={[
                [0, 2],
                [0, 3]
            ]}
            type="bar"
            values={[{ value: [1, value] }]}
            round
            size={{ height: "medium", width: "xsmall" }}
        />
        <Box align='center'>
            <Text weight='bold' size='medium'>{label}</Text>
            <Text size='small'>{value} Years</Text>
        </Box>
    </Box>

)

const skillObj = [
    { label: 'Python', value: 1.75 },
    { label: 'Node', value: 2 },
    { label: 'MongoDB', value: 1 },
    { label: 'PostgreSQL', value: 1.5 },
    { label: 'RHEL7', value: 2 },
    { label: 'Bash', value: 1.5 },
    { label: 'PowerShell', value: .5 },
    { label: 'C++', value: .5},
    { label: 'Java', value: .5}
]

const Skills = (props) => (
    <Box
        {...props}
    >
        <Heading
            level={1}
        >Technology</Heading>
        <Box
            direction='row'
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