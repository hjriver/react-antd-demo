import Tabble from '../../page/tabble'
import Users from '../../page/users'
import Topics from '../../page/topics'

// const ListMap = [Tabble, Users, Topics]

const RouteList = {
  path: '/tabble',
  meta: {
    title: '一级菜单'
  },
  icon: 'account',
  menu: true,
  component: Tabble,
  children: [{
      path: '/tabble',
      component: Tabble,
      meta: {
        title: '表格列表'
      },
      auth: true,
      menu: true
    },
    {
      path: '/users',
      component: Users,
      meta: {
        title: '用户信息'
      },
      auth: true,
      menu: true
    },
    {
      path: '/topics',
      component: Topics,
      meta: {
        title: '模块列表'
      },
      auth: true,
      menu: true
    },
  ]
}
export default RouteList
