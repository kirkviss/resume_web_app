import React, { useRef, useState } from 'react';
import { Nav, Sidebar, Text, Button, Box, Drop, Image } from 'grommet';
import { Github, Linkedin, Download, Mail } from 'grommet-icons';
import logo from '../../static/main_page_logo.png';
import dark_logo from '../../static/main_page_logo_dark.png';

const iconsMap = (icon, color) => {
    const map = {
        Github: (<Github color={color} />),
        Linkedin: (<Linkedin color={color} />),
        Download: (<Download color={color} />),
        Mail: (<Mail color={color} />)
    }
    return map[icon]
}

const ContactButton = ({ label, url, icon }) => {
    const [over, setOver] = useState();
    const tooltipColor = { color: 'accent-1', opacity: 0.9 }
    const ref = useRef();

    return (
        <Box >
            <Button
                ref={ref}
                onMouseOver={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
                onFocus={() => setOver(false)}
                onBlur={() => setOver(false)}
                hoverIndicator
                href={url}
                plain
            >
                {({ hover }) => (
                    <Box pad={{ vertical: 'small' }} align='center'>
                        {iconsMap(icon, hover ? 'black' : 'white')}
                    </Box>
                )}
            </Button>

            {ref.current && over && (
                <Drop align={{ left: "right" }} target={ref.current} plain>
                    <Box
                        animation="slideRight"
                        margin="xsmall"
                        pad="small"
                        background={tooltipColor}
                    >
                        <Text color='background'>{label}</Text>
                    </Box>
                </Drop>
            )}
        </Box>
    )
}

const LogoButton = () => {
    const [over, setOver] = useState();
    const ref = useRef();

    return (
        
            <Button
                ref={ref}
                onMouseOver={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
                onFocus={() => setOver(false)}
                onBlur={() => setOver(false)}
                hoverIndicator
                href='/'
                plain
                size="xsmall"
            >
                {({ hover }) => (
       
                        <Box pad='small'>
                            <Image fit='contain' src={hover ?  dark_logo : logo} alt='KV' />
                        </Box>
                )}
            </Button>
        )
}

const Contact = () => (
    <Box direction='row' background='main_background' >
        <Sidebar
            header={
                <LogoButton/>
            }
        >

            <Nav >
                {[{
                    url: 'https://github.com/kirkviss',
                    icon: 'Github',
                    label: 'Github'
                },
                {
                    url: 'https://www.linkedin.com/in/kirkvisser/',
                    icon: 'Linkedin',
                    label: 'LinkedIn'
                },
                {
                    url: 'https://drive.google.com/file/d/150lRVUl6M82uX7SyiVjQ_b3ZpqV1ErtH/view?usp=sharing',
                    icon: 'Download',
                    label: 'Resume'
                },
                {
                    url: 'mailto:kirkviss@gmail.com',
                    icon: 'Mail',
                    label: 'Kirkviss@gmail.com'
                }
                ].map((data) => (
                    <ContactButton label={data.label} url={data.url} icon={data.icon} />
                ))}
            </Nav>
        </Sidebar>
    </Box>

)

export default Contact;