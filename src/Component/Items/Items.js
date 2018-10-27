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
import moment from 'moment';

import DefaultImage from '../../data/img/default.png'

const { Meta } = Card;

export class FeedCard extends Component {
  render() {
    return (
      <Card
        style={{ width: 500, textAlign: "left", margin: 0, padding: 0 }}
        title={
          <div>
            <img
              alt="profile"
              src={this.props.img}
              style={{ width: 80, borderRadius: 50}}
            /> 
            <span
              style={{ margin: 20, fontSize: 20 }}
            >
              {this.props.id}
            </span>
          </div>
        }
        extra={moment(this.props.date).fromNow()}
        loading={false}
        actions={[
          <Icon type="like" />,
          <Icon type="edit" />,
          <Icon type="retweet" />,
          <Icon type="ellipsis" />,
          <Icon type="dollar" />
        ]}
      > 
        <Card
          style={{ margin: 0, border: "none" }}
          type="inner"
          cover={
            <img
              className="thumbnail"
              alt="cover"
              src={DefaultImage}
            />
          }
        >
          <Meta
            title="방탄소년단 RM-mono 2018"
            description="clicdfasfgkvhladsjklfnbhlysuafhkjk"
          />
        </Card>
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

