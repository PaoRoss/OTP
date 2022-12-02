import {
  createBrowserRouter,
} from 'react-router-dom';
// import Welcome from './Welcome';
import Menu from './waiter/TakeOrder';
import Admin from './admin/Admin';

export const routerAuth = (user, role) => {
  console.log(user)
  if (role === false){
  return createBrowserRouter([
  {
    path: '/',
    element: <Menu user={user} />,
  },
])
  } else {
  return createBrowserRouter([
    {
      path: '/',
      element: <Admin user={user}/>,
    },
  ])
  }
 /*if(role ==='true'){
    useNavigate()
  }*/
}
