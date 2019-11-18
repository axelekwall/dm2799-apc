import { actions } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

const useFocusNode = () => {
  const dispatch = useDispatch();
  const { focusNode } = useSelector(state => state.ui);
  const setFocusNode = useCallback(
    payload => dispatch(actions.setFocusNode(payload)),
    [dispatch]
  );
  return {
    focusNode,
    setFocusNode: id => ({
      onMouseEnter: () => setFocusNode(id),
      onMouseLeave: () => setFocusNode(''),
    }),
  };
};
export default useFocusNode;
