import { useSelector } from 'react-redux';

const useNodes = filter => {
  const nodes = useSelector(state => state.data.nodes);
  return filter
    ? nodes.filter(node => {
        let type = true;
        let state = true;
        if (filter.type) {
          type = filter.type === node.type;
        }
        if (filter.state) {
          state = filter.state === node.state;
        }
        return type && state;
      })
    : nodes;
};

export default useNodes;
