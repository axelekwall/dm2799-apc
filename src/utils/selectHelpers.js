export const selectTasks = taskState => state =>
  state.data.nodes.filter(
    node => node.type === 'task' && node.state === taskState
  )
