import React, { Component } from 'react';

import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider theme="light">left sidebar</Sider>
          <Content theme="lgith">main content</Content>
          <Sider theme="light">right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}

export default App;
