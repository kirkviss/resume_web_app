import React from 'react';
import { Box, Grid, Text, Heading, Meter } from 'grommet';
import ExperienceData from '../../static/data/exp_data';


const time_diff = (start, end) => {

    let tmpArray = start.split('/')
    let startDate = new Date(`${tmpArray[1]}-${tmpArray[0]}`)

    let endDate = new Date()
    if (end !== 'Present') {
        tmpArray = end.split('/')
        endDate = new Date(`${tmpArray[1]}-${tmpArray[0]}`)
    }
    return Number(((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365)).toFixed(1));
}

const getSkills = () => {
    let skillsObj = {};
    let max = 0;

    ExperienceData.forEach((exp) => {
        let year_of_exp = time_diff(exp.start_date, exp.end_date);


        exp.tech.forEach((t) => {
            if (t in skillsObj) {
                skillsObj[t] += year_of_exp;
            } else {
                skillsObj[t] = year_of_exp;
            }
            if (skillsObj[t] > max) {
                max = skillsObj[t];
            }
        })
    })

    return { max: max, skillsObj: skillsObj };
}

const SkillChart = ({ label, value, max }) => (

    <Grid
        id={label}
        columns={["flex", "flex"]}
    >
        <Box align='center' size='small' >
            <Text weight='bold' size='medium'>{label}</Text>
            <Text size='small'>{value} Years</Text>
        </Box>
        <Meter
            alginSelf='start'
            type='bar'
            max={max}
            values={[{
                "value": value,
                "highlight": true,
                "label": label
            }]}
            background='brand'
            fill
        />
    </Grid>)


const Skills = (props) => {
    const skillsData = getSkills();
    const skillsObj = skillsData.skillsObj;
    const max = skillsData.max;

    return (
        <Box
            {...props}
        >   <Box align='center'>
                <Heading >{props.id}</Heading>
            </Box>
            <Grid
                areas={[
                    ['techLabel', 'yearLabel'],
                    ['skills', 'skills']
                ]}
                columns={['flex', 'flex']}
            >
                <Box align='center'>
                    <Heading gridArea='techLabel' level={2}>Tech</Heading>
                </Box>

                <Heading gridArea='yearLabel' level={2}>Years of Experience</Heading>
                <Box
                    gap='medium'
                    gridArea='skills'
                >
                    {Object.keys(skillsObj).map((key) => (
                        <SkillChart label={key} value={skillsObj[key]} max={max} />
                    ))}
                </Box>
            </Grid>

        </Box>
    )
}

export default Skills;
