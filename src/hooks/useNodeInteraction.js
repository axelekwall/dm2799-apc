import { actions } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

const useNodeInteraction = () => {
  const dispatch = useDispatch();
  const { focusNode, selectedNode } = useSelector(state => state.ui);
  const setFocusNode = useCallback(
    payload => dispatch(actions.setFocusNode(payload)),
    [dispatch]
  );
  const setSelectedNode = useCallback(
    payload => dispatch(actions.setSelectedNode(payload)),
    [dispatch]
  );
  return {
    focusNode,
    selectedNode,
    nodeInteraction: id => ({
      onMouseEnter: () => setFocusNode(id),
      onMouseLeave: () => setFocusNode(''),
      onClick: () => setSelectedNode(id),
    }),
  };
};
export default useNodeInteraction;
