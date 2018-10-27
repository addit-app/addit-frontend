import React, { Component } from 'react';
import {
  List,
  Avatar,
  Icon,
} from 'antd';

import {
  FeedCard as Card,
  Tag
} from '../Items/Items';

export default class ItemList extends Component {
  render() {
    const listData = [];
    
    for (let i = 0 ; i < this.props.length ; i ++ ) {
      listData.push({
        img: "https://s14.favim.com/610/160726/95-bts-icon-icons-Favim.com-4557374.jpeg",
        id: "BTSXARMY",
        date: "Fri Oct 24 2018 22:40:25 GMT+0900",
        url: "https://soundcloud.com/bangtan/everythingoes-with-nell?in=bangtan/sets/rm-mono-2018",
      });
    }

    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={item => (
            <List.Item>
              <Card
                img={item.img}
                id={item.id}
                lastUpdate={item.lastUpdate}
                url={item.url}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
