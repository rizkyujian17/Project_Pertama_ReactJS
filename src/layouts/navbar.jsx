import React from 'react';
import { ContactsOutlined, HomeOutlined, ProfileOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import logo from '../logo192.png'; // import your logo image
import { useState } from 'react';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
    href: '/'
  },
  {
    label: 'Sholat',
    key: '/sholat',
    icon: <ProfileOutlined />,
    href: '/sholat'
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
    <Menu id="menu-1" onClick={onClick} selectedKeys={[current]}  mode="horizontal" style={{ backgroundColor: '#0d1321', color:'#fff', paddingBottom:'0px'  }}  responsive>
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
