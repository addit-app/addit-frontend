import React, { Component } from 'react';
import {
  Skeleton,
  Switch,
  Card,
  Icon,
  Avatar,
  Tooltip,
  Button,
} from 'antd';

const { Meta } = Card;

export class FeedCard extends Component {
  render() {
    return (
      <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="like" />, <Icon type="edit" />, <Icon type="retweet" />, <Icon type="ellipsis" />, <Icon type="dollar" />]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src="https://s14.favim.com/610/160726/95-bts-icon-icons-Favim.com-4557374.jpeg" />}
            title="Card title"
            description="19 minutes ago"
          />
        </Skeleton>
      </Card>
    );
  }
}

export class Tag extends Component {
  render() {
    return (
      <Button>recommendataion</Button>
      // <Button>{this.props}</Button>
    );
  }
}

