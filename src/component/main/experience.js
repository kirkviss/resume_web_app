import React from 'react';
import { Box, Markdown} from 'grommet';

const Experience = (props) => (
    <Box
    id="Experience"
    {...props }
    >
        <Markdown>{
`# Experience 

### Software Engineer

**Capital One**, New York, NY

5/2020 - Present

### Infrastructure Software Engineer II

**TD Ameritrade**, Jersey City, NJ

1/2020 - 4/2020

[Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

### Infrastructure Software Engineer I

**TD Ameritrade**, Jersey City, NJ	

6/2018 - 1/2020

[Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

### IAAS and Cloud Engineering Co-op

**TD Ameritrade**, Jersey City, NJ

5/2016 - 8/2016 & 1/2017 - 8/2017

[Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

### QA Co-op

**Crestron Electronics**, Rockleigh, NJ

8/2015 - 12/2015

[Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

### Software Development Co-op

**MIAC Analytics,** New York, NY

1/2015 – 5/2015

[Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)



`
        }</Markdown>
    </Box>
)

export default Experience;