import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;

const cardContent=[
    {
        title: 'basuki',
        description: 'calala',
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt : 'sample',
    },
    {
        title: 'basuki1',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        alt : 'sample1',
    },  
    {
        title: 'basuki2',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679464872062-f0a7a87e68db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        alt : 'sample2',
    },
    {
        title: 'basuki3',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679508057079-f1bf069350ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        alt : 'sample2',
    },
];
const HomeCard = () => (
    <div>
        <Row justify="space-between">
        
        {cardContent.map((item) =>(
        <Col  xs={{
            span: 12,
            offset: 6,
          }}
          lg={{
            span: 6,
            offset: 2,
          }}
          xl={{
            span: 5,
            offset: 1, 
          }}
          style={{display:'flex'}}
         >

            <Card
            hoverable
            style={{
            width: 240,
            height:480,
            marginTop: '16px',
            marginBottom: '16px',
            }}
            cover={<img alt={item.alt} src={item.src} />}
        >
            <Meta title={item.title} description={item.description} />
        </Card>
        </Col>
        ))}

        </Row>
    </div>
);
export default HomeCard;