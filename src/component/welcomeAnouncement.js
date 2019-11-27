import React 
import { AnnounceContext, Box, Grommet, Heading, Text } from "grommet";
import { isModuleSpecifier } from "@babel/types";

const welcomeAnnouncement = props => (
    <Grommet theme={grommet} full>
      <Box justify="center" align="center" background="brand" fill>
        <Heading>Welcome to announcement section</Heading>
        <AnnounceContext.Consumer>
          {announce => <Announcer announce={announce} {...props} />}
        </AnnounceContext.Consumer>
      </Box>
    </Grommet>
  );

module.exports= {
    "welcomeAnnouncement": welcomeAnnouncement
}