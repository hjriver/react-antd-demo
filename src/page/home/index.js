import React from 'react';
import {Link, Route} from 'react-router-dom'; //引入路由函数
import { Layout, Row, Col, Avatar, Input, Menu, Breadcrumb, Icon } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../../App.css'; // or 'antd/dist/antd.less'
import RouterPage from '../../router/routerPage'

// import comp from '../../router/modules/component'

const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

// function FormattedDate(props) {
//   return <h2 onClick={clickMe}>{props.date}</h2>;
// }

// function clickMe() {
//   alert("点击事件")
// }



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      value: '123',
      valueTxt: '你好',
      date: '我是 this.state.date 的值'
    }
  }
  getValue(val, value) {
    this.setState({value: val, valueTxt: value})
  }

  componentDidMount() {
    this.updateTitle(this.props);
  }

  componentWillUpdate(nextProps) {
    this.updateTitle(nextProps);
  }


  updateTitle (props) {
    console.log(props)
  }
  render() {

    return (<div className="App">
      {

        <div style={{
            minWidth: '1000px',
            height: '100%'
          }}>
          <Layout style={{
              height: '100%'
            }}>
            <Header style={{
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
              <Row>
                <Col span={10} style={{
                    textAlign: 'left'
                  }}>
                  React + Antd 实践 demo
                </Col>
                {/* <Col span={8}><Input placeholder="请输入你想知道的......"/></Col> */}
                <Col span={14} style={{
                    textAlign: 'right'
                  }}>
                  <Avatar style={{
                      backgroundColor: '#87d068',
                      marginRight: 20
                    }} icon="user"/>
                </Col>
              </Row>
            </Header>
            <Layout>
              <Sider width={200} style={{
                  background: '#fff',
                  height: '100%'
                }}>
                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{
                    height: '100%',
                    borderRight: 0
                  }}>
                  <SubMenu key="sub1" title={<span> < Icon type = "user" /> subnav 1</span>}>
                    <Menu.Item key="1">
                      <Link to="/home/tabble">to tabble</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/home/users">to users</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/home/topics">topics</Link>
                    </Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span> < Icon type = "laptop" /> subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span> < Icon type = "notification" /> subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{
                  padding: '0 24px 24px'
                }}>
                <Breadcrumb style={{
                    margin: '16px 0',
                    textAlign: 'left'
                  }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}>
                  {/* <p onClick={clickMe} className="App-intro" style={{
                      // color: 'red'
                    }}>
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                  </p>
                  <FormattedDate date={this.state.date}/> */}
                  <RouterPage/>
                  {/* <Route path="/" component={RouterPage}/> */}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      }

    </div>
	)
  }
}

export default Home
