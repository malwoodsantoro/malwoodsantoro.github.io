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
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ float: 'right', minWidth: 500, fontSize: 20 }}>
        <Menu.Item key="mail">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="https://resume.creddle.io/resume/dqjv8kua6bv">Work</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" title="Projects">
            <Menu.Item key="setting:1"><Link to="/plugins">Mapbox GL JS Plugin Explorer</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link to="/accessibility-map">Accessibility Map</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay" icon={<GithubOutlined />}>
          <a href="https://www.github.com/malwoodsantoro" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}