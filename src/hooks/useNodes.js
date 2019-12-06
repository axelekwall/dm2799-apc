import { useSelector } from 'react-redux';

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
          state = filter.id !== node.id;
        }
        return type && state && id;
      })
    : Object.values(nodes);
};

export default useNodes;
