import React from 'react';
import { Markdown, Box } from 'grommet'


export default class CategoryLayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content_markdown: ``,
            algin: 'center',
            alignContent: 'center',
            pad: 'xlarge',
            justify: 'between'
        }
    }
    
    async componentDidMount(){
      var items = {}
      items.content_markdown =  this.props.content;
      // -- Over write any of the default properties -- 
      for (var key in this.props) {
        if (key in this.props) {
            items[key] = this.props[key]
        }
      }

      this.setState(items)
    };


    render() {
       
        return (
            <Box 
              fill
              direction='column'
              algin={this.state.algin}
              justify={this.state.algin}
              pad={this.state.pad}
              background="neutral-2"
              {...this.props}
            > 
                <Markdown >{this.state.content_markdown}
                </Markdown>
            </Box>
        )
    }
}