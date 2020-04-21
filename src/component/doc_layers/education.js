import React from 'react';
import {Box, Markdown } from 'grommet';

const Education = (props) => (
    <Box
        {...props}
        id="Education"
    >
        <Markdown>{
            
`#Education

### Bachelors of Science, Computer Science		

**Stevens Institute of Technology**, Hoboken NJ	

6/2018

*   Graduated Cum Laude
*   President’s List & Dean’s List
*   Captain of the Men’s Varsity Fencing Team
*   Web Administrator of Kappa Sigma Fraternity Chapter Rho Omega `}

        </Markdown>

    </Box>
)

export default Education;