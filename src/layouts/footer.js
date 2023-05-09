import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ textAlign: 'center',backgroundColor:'#003566', color:'#fff' }}>
      My Awesome Footer ©2023 Created by Ant Design
    </Footer>
  );
};

export default MyFooter;
