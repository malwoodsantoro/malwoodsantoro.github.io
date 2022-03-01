import React from 'react';
import { Menu } from 'antd';
import { Link } from "gatsby"
import { GithubOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class MyMenu extends React.Component {
  state = {
    current: '',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ float: 'right', minWidth: 125, fontSize: 20 }}>
        <Menu.Item key="app">
          <Link to="/accessibility-map">Work</Link>
        </Menu.Item>
      </Menu>
    );
  }
}