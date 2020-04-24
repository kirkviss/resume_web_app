import React from 'react';
import {
    Box,
    Markdown,
    Heading,
    Text,
    Grid,
    Accordion,
    AccordionPanel,
    Button
} from 'grommet';
import ExperienceData from '../../static/data/exp_data'



// TODO set up so only one opens at at time
const Position = ({ data }) => {
    return (
        
            <AccordionPanel 
            size='small'
            label={
                <Grid
                    columns={['2/3', '1/3']}
                    rows={['1/2','1/2']}
                    areas={[
                        ['header', 'dates'],
                        ['location', 'location']
                    ]}
                    gap='small'
                    fill
                >
                    <Heading gridArea='header' level={3} >{data.title}</Heading>
                    <Box girdArea='location'>
                        <Text weight='bold' color='customHighlight'>{data.company} </Text>
                        <Text>{data.location}</Text>
                    </Box>
                    <Box gridArea='dates' pad='medium' align='start' >
                        <Text >{data.start_date} - {data.end_date}</Text>
                    </Box>
                </Grid>
            }>
                <Box>

                </Box>
                <Markdown>{data.details}</Markdown>
                <Grid gap='small' columns='xsmall' >
                    {data.tech.map(tech => (
                        <Button
                            size='xsmall'
                            href={`#${tech}`}
                            label={tech}
                            fill='horizontal'
                        />
                    ))}
                </Grid>
            </AccordionPanel>
        
    )
}

const Experience = (props) => (
    <Box
        id="Experience"
        {...props}
    >
        <Heading>Experience</Heading>

        <Accordion multiple={false} ac>
            {ExperienceData.map(experience => (
                <Position data={experience} />
            ))}
        </Accordion>
        </Box>
)

export default Experience;