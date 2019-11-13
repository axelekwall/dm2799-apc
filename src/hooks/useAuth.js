import { useEffect, useCallback } from 'react'
import { actions } from '../store/auth'
import { auth, signOut } from '../services/firebase'
import { useSelector, useDispatch } from 'react-redux'

const useAuth = () => {
  const dispatch = useDispatch()
  const setAuth = useCallback(payload => dispatch(actions.success(payload)), [
    dispatch,
  ])
  const storeReset = useCallback(() => {
    dispatch(actions.reset())
  }, [dispatch])
  const initialized = useCallback(() => dispatch(actions.initialized()), [
    dispatch,
  ])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        try {
          if (user) {
            // Auth successful
            setAuth(user)
          } else {
            // No user
            storeReset()
          }
        } catch (error) {
          // No user
          console.log(error)
          await signOut()
        } finally {
          initialized()
        }
      },
      error => {
        // Firebase error
        console.log(error)
        storeReset()
      }
    )
    return () => {
      unsubscribe()
    }
  }, [initialized, setAuth, storeReset])
  return useSelector(state => state.auth.initialized)
}

export default useAuth
