import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/data';
import { useEffect } from 'react';
import nodes from '../mockData';

const useData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.newNodes(nodes));
    dispatch(actions.initialized());
  }, [dispatch]);

  return useSelector(state => state.data.initialized);
};

export default useData;
