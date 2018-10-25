import React, { Component } from 'react';
import {
  Col,
  Input,
  Layout,
  Row,
  Tooltip,
} from 'antd';

import logo from '../../data/img/icon.png'

const { Header } = Layout;
const Search = Input.Search;

class HeaderWrapper extends Component {
  render() {
    return (
      <Header>
        <Col
          span={5}
        >
          <div className="logo">
            <img alt="icon" src={logo} />
            Addit
          </div>
        </Col>
        <Col
          span={8}
          offset={2}
        >
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
          offset={4}
        >
          <div className="login">
            Login | SignUp
          </div>
        </Col>
      </Header>
    );
  }
}

export default HeaderWrapper;
