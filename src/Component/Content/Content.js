import React, { Component } from 'react';
import {
  Layout,
  Col,
  Row,
} from 'antd';

import ItemList from '../ItemList/ItemList';

const { 
  Content,
  Sider,
} = Layout;

export class MainContentWrapper extends Component {
  render() {
    return (
      <Content>
        <Row>
          <Col offset={8}>
            <ItemList length={23} />
          </Col>
        </Row>
      </Content>
    );
  }
}

export class LeftSiderWrapper extends Component {
  render() {
    return (
      <Sider theme="light">
        {/* <Tag /> */}
      </Sider>
    )
  }
}

export class RightSiderWrapper extends Component {
  render() {
    return (
      <Sider theme="light">
      </Sider>
    )
  }
}
