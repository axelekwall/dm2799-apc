import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const ProgressVisualization = () => {
  const classes = useStyles();
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
