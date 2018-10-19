import React, { Component } from 'react';
import {
  Layout,
  Input,
} from 'antd';

import logo from '../../data/img/logo.png'

const { Header } = Layout;
const Search = Input.Search;

class HeaderWrapper extends Component {
  render() {
    return (
      <Header>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200}}
        />
        <img className="logo" src={logo} />
        This is Header
      </Header>
    );
  }
}

export default HeaderWrapper;
