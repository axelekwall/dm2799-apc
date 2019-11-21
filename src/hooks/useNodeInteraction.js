import { actions } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

const useNodeInteraction = () => {
  const dispatch = useDispatch();
  const focusNode = useSelector(state => state.ui.focusNode);
  const selectedNode = useSelector(state => state.ui.selectedNode);
  const setFocusNode = useCallback(
    payload => dispatch(actions.nodeFocused(payload)),
    [dispatch]
  );
  const setSelectedNode = useCallback(
    payload => dispatch(actions.nodeSelected(payload)),
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
