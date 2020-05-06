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
                {...this.props}
            >

                {this.state.references.map(label => (
                    <Button
                        hoverIndicator
                        plain
                        href={`#${label}`}
                        onClick={this.props.onMobileSideBarButtonClick()}
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