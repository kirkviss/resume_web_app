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
        <Box>
            <AccordionPanel label={

                <Grid
                    columns={['1/2', '1/2']}
                    areas={[
                        ['header', 'header'],
                        ['location', 'dates'],
                    ]}
                    gap='small'
                >
                    <Heading gridArea='header' level={3} >{data.title}</Heading>
                    <Box girdArea='location'>
                        <Text weight='bold' color='customHighlight'>{data.company} </Text>
                        <Text>{data.location}</Text>
                    </Box>
                    <Box gridArea='dates'>
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
        </Box>
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
    //     <Box
    //         id="Experience"
    //         {...props}
    //     >
    //         <Position data={ExperienceData[1]} />
    //         <Markdown>{
    //             `# Experience 

    // ### Software Engineer

    // **Capital One**, New York, NY

    // 5/2020 - Present

    // ### Infrastructure Software Engineer II

    // **TD Ameritrade**, Jersey City, NJ

    // 1/2020 - 4/2020

    // [Node.js](#node.js), [JaveScript](#skills), [Nginx](#skill)

    // ### Infrastructure Software Engineer I

    // **TD Ameritrade**, Jersey City, NJ	

    // 6/2018 - 1/2020

    // [Node.js](#skills), [JaveScript](#skills), [Nginx](#skill), [Python](#Python)

    // ### IAAS and Cloud Engineering Co-op

    // **TD Ameritrade**, Jersey City, NJ

    // 5/2016 - 8/2016 & 1/2017 - 8/2017

    // [Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

    // ### QA Co-op

    // **Crestron Electronics**, Rockleigh, NJ

    // 8/2015 - 12/2015

    // [Node.js](#skills), [JaveScript](#skills), [Nginx](#skill)

    // ### Software Development Co-op

    // **MIAC Analytics,** New York, NY

    // 1/2015 – 5/2015

    // [Node.js](#/Node.JS), [JaveScript](#skills), [Nginx](#skill)



    // `
    //         }</Markdown>
    //     </Box>
)

export default Experience;