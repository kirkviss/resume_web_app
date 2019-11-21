import React from 'react';
import { Markdown, Box } from 'grommet'
// import FrameComponent from './FrameComponent';

export default class CategoryLayer extends React.Component {

    constructor(props) {
        super(props);
        this.content_markdown = ``;
        this.algin = 'center';
        this.state = {
            content_markdown: ``,
            algin: 'center',
            pad: 'xlarge'
        }
    }
    
    componentDidMount(){
      var items = {}
      items.content_markdown =  this.props.content;
      
      if ('algin' in this.props) this.algin = this.props.algin;
      if ('pad' in this.props) items.pad = this.props.pad;
      if ('size' in this.props) items.size = this.props.size;
      this.setState(items)
    };


    render() {
       
        return (
            <Box 
              algin={this.algin}
              justify={this.algin}
              pad={this.state.pad}
              width={this.state.size}
              background="neutral-2"
              height={this.state.size}
            > 
                <Markdown >{this.state.content_markdown}
                </Markdown>
            </Box>
        )
    }
}