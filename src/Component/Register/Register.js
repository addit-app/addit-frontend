import React, { Component } from 'react';
import {
  Form, Input,
  Tooltip, Icon,
  Cascader, Select,
  Row, Col, Checkbox,
  Button, AutoComplete
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Register extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div className="registerPage">
        <Form
          className="generatorForm"
        >
          <span>Generate Key</span>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Master Key
              </span>
            )}
          >
            {getFieldDecorator('generator', {
              rules: [{ whitespace: true }],
            })(
              <Input
                disabled
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Private Key
              </span>
            )}
          >
            {getFieldDecorator('generator', {
              rules: [{ whitespace: true }],
            })(
              <Input
                disabled
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Public Key
              </span>
            )}
          >
            {getFieldDecorator('generator', {
              rules: [{ whitespace: true }],
            })(
              <Input
                disabled
              />
            )}
          </FormItem>
        </Form>
        <Form
          onSubmit={this.handleSubmit}
          className="registerForm"
        >
          <span>Creat Account</span>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export const RegisterForm = Form.create()(Register);
