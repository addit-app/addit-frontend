import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header} = Layout;

class HeaderWrapper extends Component {
  render() {
    return (
      <Header>
        This is Header
      </Header>
    );
  }
}

export default HeaderWrapper;
