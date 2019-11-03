import React from 'react';
import { Markdown } from 'grommet'
import FrameComponent from './FrameComponent';

export default class CategoryLayer extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            content: `# Hi there, you visited my site... That's DOPE!
            This is my version of a business card, just doing my part to save the trees and all that.`
        }
    }
 
    componentDidMount(){
      
       fetch(this.props.filePath)
       .then(response => {
           console.log(response.text())
           return response.text() })
       .then(text => this.setState({content: text}))
    }

    render() {
       
        return (
            <FrameComponent>
                <Markdown>{this.state.content}
                </Markdown>
            </FrameComponent>
        )
    }
}