import React from 'react';
import { ContactsOutlined, HomeOutlined, ProfileOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import logo from '../logo192.png'; // import your logo image
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  return (

    <Menu onClick={onClick} selectedKeys={[current]}  mode="horizontal" style={{ backgroundColor: '#1f1f1f', color:'#fff' }} >
      <img src={logo} alt="Logo" style={{ width :'24px', padding:'12px'}}/>
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon} >
         

          <a href={item.href}>{item.label}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BaseNavbar;
