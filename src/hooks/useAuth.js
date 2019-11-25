import { useEffect, useCallback } from 'react';
import { actions } from '../store/auth';
import { auth, signOut } from '../services/firebase';
import { useSelector, useDispatch } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch();
  const storeReset = useCallback(() => {
    dispatch(actions.reset());
  }, [dispatch]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        try {
          if (user) {
            // Auth successful
            dispatch(actions.success(user));
          } else {
            // No user
            storeReset();
          }
        } catch (error) {
          // No user
          console.log(error);
          await signOut();
        } finally {
          dispatch(actions.initialized());
        }
      },
      error => {
        // Firebase error
        console.log(error);
        storeReset();
      }
    );
    return () => {
      unsubscribe();
    };
  }, [dispatch, storeReset]);
  return useSelector(state => state.auth.initialized);
};

export default useAuth;
