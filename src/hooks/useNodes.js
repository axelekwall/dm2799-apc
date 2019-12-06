import { useSelector } from 'react-redux';

const isChild = (nodes, nodeId, id) => {
  const node = nodes[nodeId];
  console.log(node);
  if (node.links.length <= 0) return false;
  if (node.links.includes(id)) return true;
  return node.links.reduce(
    (prev, curr) => (isChild(nodes, curr, id) ? true : prev),
    false
  );
};

const useNodes = filter => {
  const nodes = useSelector(state => state.data.nodes);
  return filter
    ? Object.values(nodes).filter(node => {
        let type = true;
        let state = true;
        let id = true;
        if (filter.type) {
          type = filter.type === node.type;
        }
        if (filter.state) {
          state = filter.state === node.state;
        }
        if (filter.id) {
          state = filter.id !== node.id && !isChild(nodes, node.id, filter.id);
        }
        return type && state && id;
      })
    : Object.values(nodes);
};

export default useNodes;
