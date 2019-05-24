import React from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
// import appStore from '../../../store'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css'
const FormItem = Form.Item;

// @withRouter @inject('appStore') @observer @Form.create()
class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            // this.props.appStore.toggleLogin(true, {username: values.username})
            sessionStorage.setItem("token", values)
            // const {from} = this.props.location.state || {from: {pathname: '/'}}
            this.props.history.push('/home/tabble')
        }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
            return (
                <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="###">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            );
    }
}
(Form.create()(Login));

export default Form.create()(Login);
// export default Login;
