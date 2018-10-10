import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

import './App.css';

const { Sider } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider theme="light">left sidebar</Sider>
          <Content />
          <Sider theme="light">right sidebar</Sider>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default App;
