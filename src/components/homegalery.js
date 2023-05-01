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
          <Card hoverable cover={<img alt="galeryphoto" src="https://images.unsplash.com/photo-1667387322417-c434fa1f563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NjUwNjUxNjR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"/> }
           style={{
            marginTop: '16px',
            marginBottom: '16px',
            backgroundSize: 'cover'
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
          <Card hoverable cover={<img alt="galeryphoto" src="https://images.unsplash.com/photo-1667387322417-c434fa1f563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NjUwNjUxNjR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"/> }
           style={{
            marginTop: '16px',
            marginBottom: '16px',
            backgroundSize: 'cover'
            }}
          >
          </Card>
      </Col>

    </Row>
)
}

export default HomeGalery