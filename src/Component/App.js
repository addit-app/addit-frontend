import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import { 
  MainContentWrapper as MainContent,
  LeftSiderWrapper as LeftContent,
  RightSiderWrapper as RightContent
} from './Content/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <LeftContent />
          <MainContent />
          <RightContent />
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default App;
