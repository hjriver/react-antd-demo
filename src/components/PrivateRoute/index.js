import React from 'react'
import {Route, Redirect} from 'react-router-dom'
// import { isAuthenticated } from '../../utils/Session'
const token = sessionStorage.getItem("token")
const PrivateRoute = ({
  component: Component,
  ...rest
}) =>
// (<Route {...rest} render={(props) => (
//     token
//     ? <Component {...props}/>
//     : <Redirect to={{
//         pathname: '/login',
//         state: {
//           from: props.location
//         }
//       }}/>)}/>)
(<Route {...rest} render={(props) =>(<Component {...props}/>)}/>)

export default PrivateRoute
