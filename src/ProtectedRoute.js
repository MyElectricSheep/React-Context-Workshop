import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from "./context/AuthContext" 

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { me } = useAuthContext()
  console.log(me)
  return (
    <Route {...rest} render={
      props => {
        if (me) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/signin',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;