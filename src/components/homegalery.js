import React from 'react'
import {Row, Col } from 'antd';
import {Card} from 'antd';
import { Button } from 'antd';

function HomeGalery() {
  return (
    <Row justify="space-between" style={{display: 'flex'}} span={24}>
        <Col span={12} style={{paddingLeft: '24px'}}  xs={{
            span: 22,
            offset: 0,
          }}
          lg={{
            span: 12,
            offset: 0,
          }}
          xl={{
            span: 12,
            offset: 0, 
          }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ display: 'inline', margin: '0' }}><strong>Galeri </strong></h1>
          <Button type="primary" size="small" style={{ float: 'right' }}>Lebih Banyak</Button>
          </div>
          <hr></hr>
          <Card hoverable cover={<img alt="galeryphoto" src="https://plus.unsplash.com/premium_photo-1682437950549-cea05d4844ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/> }
           style={{
            marginTop: '16px',
            marginBottom: '16px',
            backgroundSize: 'cover',
            width:'560',
            height:'315'
            }}
          >
          </Card>
      </Col>
      <Col span={12} style={{paddingLeft: '24px'}} 
       xs={{
        span: 22,
        offset: 0,
      }}
      lg={{
        span: 12,
        offset: 0,
      }}
      xl={{
        span: 12,
        offset: 0, 
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ display: 'inline', margin: '0' }}><strong>Video </strong></h1>
          <Button type="primary" size="small" style={{ float: 'right' }}>Lebih Banyak</Button>
        </div>
          <hr></hr>
          <Card hoverable
           style={{
            marginTop: '16px',
            marginBottom: '16px',
            backgroundSize: 'cover'
            }}
          >
            <iframe width="100%" height="560" src="https://www.youtube.com/embed/HyiIvhdN3JI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Card>
      </Col>

    </Row>
)
}

export default HomeGalery