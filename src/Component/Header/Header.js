import React, { Component } from 'react';
import {
  Col,
  Input,
  Layout,
  Row,
  Tooltip,
} from 'antd';

import logo from '../../data/img/logo.png'

const { Header } = Layout;
const Search = Input.Search;

class HeaderWrapper extends Component {
  render() {
    return (
      <Header>
        <Row gutter={16}>
          <Col span={4}>
            <div>
              <img alt="logo" className="logo" src={logo} />
            </div>
          </Col>
          <Col span={10}>
            <Tooltip
              placement='right'
              title='Work in Progress...'
            >
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                disabled
              />
            </Tooltip>
          </Col>
          <Col
            span={5}
            offset={5}
          >
            <div className="login">
              Login | SignUp
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default HeaderWrapper;
