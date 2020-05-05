import React from 'react';
import { Box, Button, Text } from 'grommet'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            references: props.references
        }
    }

    render() {
        return (
            <Box
                background="nav"
                {...this.props}
            >

                {this.state.references.map(label => (
                    <Button
                        hoverIndicator
                        plain
                        href={`#${label}`}
                    >
                        <Box
                            key={label}
                            pad={{ horizontal: "medium", vertical: "medium" }}
                        >
                            <Text size="large"> {label}</Text>
                        </Box >
                    </Button>
                ))}

            </Box>
        )
    }
}