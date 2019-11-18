import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const ProgressVisualization = () => {
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Progress Visualization</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>Chart goes here</div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ProgressVisualization;
