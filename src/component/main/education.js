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
import EducationData from '../../static/data/ed_data.json'

const Degree = ({ data }) => (
    <AccordionPanel
        size='small'
        label={
            <Grid
                columns={['2/3', '1/3']}
                rows={['1/2', '1/2']}
                areas={[
                    ['header', 'dates'],
                    ['location', 'location']
                ]}
                gap='small'
                fill
            >
                <Heading gridArea='header' level={3} >{data.degree}</Heading>
                <Box girdArea='location'>
                    <Text weight='bold' color='customHighlight'>{data.school} </Text>
                    <Text>{data.location}</Text>
                </Box>
                <Box gridArea='dates' pad='medium' align='start' >
                    <Text >{data.graduation_date}</Text>
                </Box>
            </Grid>
        }>
        <Markdown>{data.details}</Markdown>
        <Grid gap='small' columns='xsmall' margin='medium' >
            {data.tech.map(tech => (
                <Button
                    size='xsmall'
                    href={`#${tech}`}
                    label={<Box algin='end' size='small'>
                        <Text size='small'>{tech}</Text>
                    </Box>}
                    fill='horizontal'

                />
            ))}
        </Grid>
    </AccordionPanel>

)

const Education = (props) => (
    <Box
        {...props}
        id="Education"
    >
        <Heading>Education</Heading>
        <Accordion multiple={false}>
            {EducationData.map(school=> (
                <Degree data={school} />
            ))

            }
        </Accordion>

    </Box>
)

export default Education;