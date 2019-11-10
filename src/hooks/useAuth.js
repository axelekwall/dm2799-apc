import { useEffect, useCallback } from 'react'
import { authSuccess, setAuthInitialized, resetState } from '../store/actions'
import { auth, signOut } from '../services/firebase'
import { useSelector, useDispatch } from 'react-redux'

const useAuth = () => {
  const dispatch = useDispatch()
  const setAuth = useCallback(payload => dispatch(authSuccess(payload)), [
    dispatch,
  ])
  const storeReset = useCallback(() => {
    dispatch(resetState())
  }, [dispatch])
  const initialized = useCallback(() => dispatch(setAuthInitialized()), [
    dispatch,
  ])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        try {
          if (user) {
            // Auth successfull
            setAuth(user)
          } else {
            // No user
            storeReset()
          }
        } catch (error) {
          // No user
          console.log(error)
          signOut()
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
  return useSelector(state => state.authInitialized)
}

export default useAuth
