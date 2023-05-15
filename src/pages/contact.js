import React from 'react';
import {Button, Modal, Input, Form, Select} from 'antd';
import { useState } from 'react';
import { UserOutlined, ContactsOutlined} from '@ant-design/icons';
import TableCard from '../components/tableContact';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const containerStyle = {
    position: 'relative',
    height: 200,
    padding: 48,
    textAlign: 'center',
}
const formItemLayout=
 {
    paddingBottom: '4px',

  }

const ModalContact = () => {
    const JenisKelamin = [
        {
            kelamin : 'Laki-laki',
        },
        {
            kelamin : 'Perempuan',
        }
    ];
    const [isModalOpen, setIsModalOpen, setLoading] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
      
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    const InputStyle  ={
        marginBottom:'8px',
        width:'100%'
    }
   

    return (
        <>
          <Button type="primary" onClick={showModal}>
            Tambah 
          </Button>
          <Modal title="Pendaftaran" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
            <Form>
                <Input placeholder="Masukkan Nama"  allowClear prefix={<UserOutlined />} style={InputStyle} />
                <Select placeholder="Jenis Kelamin"  allowClear   defaultValue='Jenis Kelamin' 
                    style={InputStyle} 
                    onChange={handleChange}
                    options={JenisKelamin.map((j) => ({
                    label:  j.kelamin,
                    value:  j.kelamin,
                    }))} />
                <Input placeholder="Masukkan Nomor Hp"  allowClear  prefix={<ContactsOutlined />} type="number" min={12} max={14} style={InputStyle} />
            </Form>
          </Modal>
        </>
      );
    };


//Main//
const Contact = () => {
    return (
        <>
        <div style={containerStyle}>
            <h1>Daftar Contact</h1> 
            <ModalContact/>
        </div>
            <TableCard/>
        </>
    );
}

export default Contact;
