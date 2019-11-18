import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import SankeyChart from './SankeyChart';

const MainVisualization = () => {
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Main Visualization</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <SankeyChart width={1000} height={400} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default MainVisualization;
