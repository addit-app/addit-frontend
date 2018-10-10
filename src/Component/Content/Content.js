import React, { Component } from 'react';
import { Layout } from 'antd';

import FeedItem from '../FeedItem/FeedItem';

const { Content } = Layout;

class ContentWrapper extends Component {
  render() {
    return (
      <Content>
        This is Content!
        <FeedItem />
      </Content>
    );
  }
}

export default ContentWrapper;
