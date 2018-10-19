import React, { Component } from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';


import CardContent from '../CardContent/CardContent';

const { Meta } = Card;

class FeedItem extends Component {
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
          <CardContent />
        </Skeleton>

      </Card>
    );
  }
}

export default FeedItem;
