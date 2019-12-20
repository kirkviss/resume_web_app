import React from 'react';
import { Box, Button, Text } from 'grommet'

export default class NavBarBox extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            direction: props.direction,
            references: props.references
        }
    }

    render() {
        return (
            <Box
                fill
                overflow="auto"
                background="brand"
                width="small"
                direction={this.state.direction}
            >

                {this.state.references.map(label => (
                    <Button
                        hoverIndicator
                        plain
                    >
                        <Box
                            key={label}
                            href="#"
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