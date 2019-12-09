import uuid from 'uuid/v4';

const calcState = (current, state) => {
  switch (current) {
    case 'todo':
      return state === 'todo' ? 'todo' : 'inProgress';
    case 'inProgress':
      return current;
    case 'done':
      return state === 'done' ? 'done' : 'inProgress';
    default:
      return current;
  }
};

export const getNodeData = (nodes, id) => {
  const childIds = getNodeChildrenIds(nodes, id);
  return {
    ...childIds.reduce(
      (data, childId, i) => {
        const nodeData = getNodeData(nodes, childId);
        if (i === 0) {
          return {
            estimate: nodeData.estimate / nodeData.linkCount,
            state: nodeData.state,
          };
        }
        return {
          estimate: data.estimate + nodeData.estimate / nodeData.linkCount,
          state: calcState(data.state, nodeData.state),
        };
      },
      {
        state: nodes[id].state,
        estimate: nodes[id].estimate,
      }
    ),
    linkCount: nodes[id].links.length || 1,
  };
};

export const getNodeChildrenIds = (nodes, id) => {
  if (id === '') return [];
  return Object.values(nodes)
    .filter(node => node.links.includes(id))
    .map(node => node.id);
};

export const getAllParentNodes = (nodes, id) => {
  if (id === '') return [];
  let linkedNodes = [];
  linkedNodes.push(id);
  const { links } = nodes[id];
  if (links.length > 0) {
    links.forEach(link => {
      linkedNodes = linkedNodes.concat(getAllParentNodes(nodes, link));
    });
  }
  return linkedNodes;
};

export const getNodeFillColor = node => {
  switch (node.state) {
    case 'done':
      return 'green';
    case 'inProgress':
      return 'yellow';
    case 'todo':
    default:
      return 'blue';
  }
};

export const createNode = data => ({
  id: uuid(),
  title: 'Title',
  desc: 'Description',
  type: 'task',
  state: 'todo',
  links: [],
  estimate: 1,
  ...data,
});
