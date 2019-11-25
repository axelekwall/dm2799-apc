import React, { useCallback, useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Slider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: theme.drawerWidth,
    padding: theme.spacing(2),
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    marginBottom: theme.spacing(2),
  },
  selectInput: {
    marginBottom: theme.spacing(2),
  },
  sliderInput: {
    marginBottom: theme.spacing(2),
  },
}));

const TaskForm = ({ taskId, action }) => {
  const classes = useStyles();
  const task = useSelector(
    state => state.data.nodes.filter(node => node.id === taskId)[0],
    [taskId]
  );
  const { inputProperties: titleInput, value: title } = useInput(
    task ? task.title : ''
  );
  const { inputProperties: descInput, value: desc } = useInput(
    task ? task.desc : ''
  );
  const { inputProperties: stateInput, value: state } = useInput(
    task ? task.state : 'todo'
  );
  const [estimate, setEstimate] = useState(task ? task.estimate : 1);
  const readOnly = task && task.type !== 'task';
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      action({ id: taskId ? taskId : uuid(), title, desc, state, estimate });
    },
    [action, title, desc, taskId, state, estimate]
  );
  const handleEstimateChange = useCallback((e, value) => {
    e.preventDefault();
    setEstimate(value);
  }, []);
  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        disabled={readOnly}
        className={classes.textInput}
        id="input-title"
        label="Title"
        {...titleInput}
      />
      <TextField
        disabled={readOnly}
        className={classes.textInput}
        id="input-desc"
        label="Description"
        multiline
        {...descInput}
      />
      <FormControl className={classes.selectInput}>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select labelId="state-select-label" id="state-select" {...stateInput}>
          <MenuItem value="todo">Todo</MenuItem>
          <MenuItem value="inProgress">In Progress</MenuItem>
          <MenuItem value="done">Done</MenuItem>
          <MenuItem value="auto">Auto</MenuItem>
        </Select>
      </FormControl>
      <Typography id="estimate-input-label" gutterBottom>
        Estimate
      </Typography>
      <Slider
        className={classes.sliderInput}
        aria-labelledby="estimate-input-label"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        value={estimate}
        onChange={handleEstimateChange}
      />
      {!readOnly && (
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
