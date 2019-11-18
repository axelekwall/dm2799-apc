import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SankeyChart from './SankeyChart';

const useStyles = makeStyles(theme => ({}));

const MainVisualization = () => {
  const classes = useStyles();
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
        <SankeyChart width={800} height={500} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default MainVisualization;
