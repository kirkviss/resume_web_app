import React from 'react';
import { Box, Grid } from 'grommet';

const FrameComponent = props => (
    <Grid>
        <Box {...props} />
    </Grid> 
)


FrameComponent.defaultProps = {
    align: 'center',
    pad: 'large',
  };

export default FrameComponent;