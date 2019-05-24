import React from 'react';

import { Layout, Row, Col, Avatar, Input } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import SiderComponent from './sider'


const { Header, Sider, Content  } = Layout;


export default class Demo1 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '1',
            valueTxt: '',
        }
    }

    getValue (val,value) {
        this.setState ({
            value: val,
            valueTxt: value
        })
    }

    render () {
        return (
            <div style={{minWidth:'1000px'}}>
                <Layout>
                    <Header style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>
                        <Row>
                            <Col span={10}>
                                React + Antd 实践 demo
                            </Col>
                            <Col span={8}><Input placeholder="请输入你想要的......" /></Col>
                            <Col span={6}>
                                <Avatar style={{backgroundColor: '#87d068',marginRight:20}} icon="user" />
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider style={{color:'#666'}}>
                            <SiderComponent
                                getValue={this.getValue.bind(this)}
                            />
                        </Sider>
                        <Content style={{marginLeft:'5%',height:'86vh',paddingRight:'2%',overflow:'auto',textAlign:'center'}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
