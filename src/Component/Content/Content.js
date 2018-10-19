import React, { Component } from 'react';
import { Layout } from 'antd';

import {
  FeedCard as Card,
  Tag
} from '../Items/Items';

const { Content, Sider } = Layout;

export class MainContentWrapper extends Component {
  render() {
    return (
      <Content>
        <Card />
      </Content>
    );
  }
}

export class LeftSiderWrapper extends Component {
  render() {
    return (
      <Sider theme="light">
        <Tag />
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
