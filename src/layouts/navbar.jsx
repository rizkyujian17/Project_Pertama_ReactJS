import React from 'react';
import { ContactsOutlined, HomeOutlined, ProfileOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
    href: '/'
  },
  {
    label: 'About',
    key: '/about',
    icon: <ProfileOutlined />,
    href: '/about'
  },
  {
    label: 'Contact',
    key: '/contact',
    icon: <ContactsOutlined />,
    href: '/contact'
  }
];

const BaseNavbar = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  return (
    <Menu onClick={onClick} selectedKeys={[current]}  mode="horizontal" style={{ backgroundColor: '#adc6ff' }}>
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          <a href={item.href}>{item.label}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BaseNavbar;
