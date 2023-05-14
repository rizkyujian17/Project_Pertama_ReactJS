import React from 'react';
import { ContactsOutlined, HomeOutlined, ProfileOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from '../logo192.png'; // import your logo image
import { useState } from 'react';

const {Header}=Layout;

const items = [
  {
    icon : <img src={logo} style={{ width: '16px', marginTop: '4px'}} alt="navbarBrand"/>,
    key : 'NavBrand',
    href : '',
    label: 'React Belajar'
  },
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
        <Header style={{ backgroundColor: '#000', color:'#fff' }}>
          
          <Menu id="menu-1"  onClick={onClick} selectedKeys={[current]}  mode="horizontal" style={{ backgroundColor: '#000', color:'#fff' }}  responsive="true"  
          
          items={items.map(item =>(       
            
            { 
           
            key:  item.key,
            icon : item.icon,
            label : <a href={item.href}>{item.label}</a>,
          }
          
        ))}>
        
    
        </Menu>
        </Header>

      );
};

export default BaseNavbar;

