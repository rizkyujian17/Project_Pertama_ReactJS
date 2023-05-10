import React from 'react';
import { Card, Button } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;

const cardContent=[
    { 
        id:1,
        title: 'basuki',
        description: 'calala',
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        alt : 'sample',
    },
    {
        id:2,
        title: 'basuki1',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        alt : 'sample1',
    },  
    {
        id:3,
        title: 'basuki2',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679464872062-f0a7a87e68db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        alt : 'sample2',
    },
    {
        id:4,      
        title: 'basuki3',
        description: 'calala',
        src: 'https://images.unsplash.com/photo-1679508057079-f1bf069350ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        alt : 'sample2',
    },
];
const HomeCard = () => (
    <div>
        <Col xs={{
            span: 16,
            offset: 4,
          }}
          lg={{
            span: 22,
            offset: 1,
          }}
          style={{padding: '8px'}}
          >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ display: 'inline', margin: '0' }}><strong>Berita </strong></h1>
          <Button type="primary" size="small" style={{ float: 'right' }}>Lebih Banyak</Button>
        </div>
          <hr></hr>
        </Col>
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
            cover={<img alt={item.alt} src={item.src}  />}key={item.id}
        >
            <Meta title={item.title} description={item.description} />
        </Card>
        </Col>
        ))}

        </Row>
    </div>
);
export default HomeCard;