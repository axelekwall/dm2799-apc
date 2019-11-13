import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Public = () => {
  const isSignedIn = useSelector(state => state.auth.user !== null)
  return isSignedIn ? <Redirect to="/dashboard" /> : <div>Public</div>
}

export default Public
