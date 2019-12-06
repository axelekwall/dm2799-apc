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
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import useNodes from '../hooks/useNodes';

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
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const SelectedLink = ({ id }) => {
  const { title } = useSelector(state => state.data.nodes[id], [id]);
  return <span style={{ marginRight: '10px' }}>{title}</span>;
};

const TaskForm = ({ taskId, action, deleteAction }) => {
  const classes = useStyles();
  const task = useSelector(state => state.data.nodes[taskId], [taskId]);
  const tasks = useNodes({ id: taskId });
  const { inputProperties: titleInput, value: title } = useInput(
    task ? task.title : ''
  );
  const { inputProperties: descInput, value: desc } = useInput(
    task ? task.desc : ''
  );
  const { inputProperties: stateInput, value: state } = useInput(
    task ? task.state : 'todo'
  );
  const { inputProperties: linksInput, value: links } = useInput(
    task ? task.links : []
  );
  const [estimate, setEstimate] = useState(task ? task.estimate : 1);
  const readOnly = task && task.type !== 'task';
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (links.length <= 0 || title.length <= 0) return;
      action({
        id: taskId ? taskId : uuid(),
        title,
        desc,
        state,
        estimate,
        links,
      });
    },
    [action, title, desc, taskId, state, estimate, links]
  );
  const handleEstimateChange = useCallback((e, value) => {
    e.preventDefault();
    setEstimate(value);
  }, []);
  const handleDelete = useCallback(e => {
    e.preventDefault();
    deleteAction();
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
        <InputLabel id="links-select-label">Links</InputLabel>
        <Select
          disabled={readOnly}
          labelId="links-select-label"
          id="links-select"
          renderValue={selected =>
            selected.map(id => <SelectedLink key={id} id={id} />)
          }
          multiple
          {...linksInput}
        >
          {tasks.map(task => (
            <MenuItem key={task.id} value={task.id}>
              <Checkbox checked={links.indexOf(task.id) > -1} />
              <ListItemText primary={task.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.selectInput}>
        <InputLabel id="state-select-label">State</InputLabel>
        {state === 'auto' ? (
          <Select
            disabled={readOnly}
            labelId="state-select-label"
            id="state-select"
            {...stateInput}
          >
            <MenuItem value="auto">Auto</MenuItem>
          </Select>
        ) : (
          <Select
            disabled={readOnly}
            labelId="state-select-label"
            id="state-select"
            {...stateInput}
          >
            <MenuItem value="todo">Todo</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        )}
      </FormControl>
      <Typography id="estimate-input-label" gutterBottom>
        Estimate
      </Typography>
      <Slider
        disabled={readOnly}
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
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Save
        </Button>
      )}
      {!readOnly && deleteAction && (
        <Button
          className={classes.submitButton}
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
