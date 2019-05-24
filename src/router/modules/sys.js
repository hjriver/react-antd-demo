import Login from '../../sys/login'


const RouteLogin = {
  path: '/login',
  meta: {
    title: '用户登录'
  },
  icon: 'account',
  menu: true,
  component: Login,
}
export default RouteLogin
