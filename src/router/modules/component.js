import Tabble from '../../page/tabble'
import Users from '../../page/users'
import Topics from '../../page/topics'
import Login from '../../page/sys/login'

const comp = [{
    component: Tabble,
    path: '/tabble'
  },
  {
    component: Users,
    path: '/users'
  },
  {
    component: Topics,
    path: '/topics'
  },
  {
    component: Login,
    path: '/login'
  }
]

export default comp
