import React from 'react';
import { Box, Chart } from 'grommet';

const Skills = (props) => (
    <Box
        {...props}
    >
        <Chart
            type='bar'
            values={[
                {
                    label: 'Node',
                     value: [0, 24],
                },
                {
                    label: 'Python',
                     value: [1, 6],
                },
                {
                    label: 'Java',
                     value: [2, 8],
                }
            ]}
        >

        </Chart>
    </Box>
)

export default Skills;