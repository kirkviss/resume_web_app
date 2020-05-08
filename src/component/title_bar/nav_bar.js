import React from 'react';
import { Box, Button, Text } from 'grommet'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            references: props.references
        }
        this.onNavButtonClick = this.onNavButtonClick.bind();
    }

    onNavButtonClick = () => {
        if ('onMobileSideBarButtonClick' in this.props){
            this.props.onMobileSideBarButtonClick()
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
                        onClick={()=> this.onNavButtonClick()}
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