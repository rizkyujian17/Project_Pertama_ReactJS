import React from "react";
import {Button, Modal, Input, Form, Select} from 'antd';
import { useState } from 'react';
import { UserOutlined, ContactsOutlined} from '@ant-design/icons';

const ModalContact = () => {
    const JenisKelamin = [
        {
            label : "Laki-Laki",
            value : 'L',
        },
        {
            label : "Perempuan",
            value : 'P',
        }
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const showModal = () => {
        setLoading(true);// Mengatur loading menjadi true saat tombol diklik
        setTimeout(() => {
          setIsModalOpen(true); // Mengatur isModalOpen menjadi true setelah delay 2000 ms
          setLoading(false); // Mengatur loading menjadi false setelah isModalOpen diatur menjadi true
        }, 2000);
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
          <Button type="primary" onClick={showModal}loading={loading}>
            Tambah 
          </Button>
          <Modal title="Pendaftaran" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
            <Form>
                <Input placeholder="Masukkan Nama"  allowClear prefix={<UserOutlined />} style={InputStyle} />
                <Select placeholder="Jenis Kelamin"  allowClear   defaultValue='Jenis Kelamin' 
                    style={InputStyle} 
                    onChange={handleChange}
                    options={JenisKelamin.map((j) => ({
                    label:  j.label,
                    value:  j.value,
                    }))} />
                <Input placeholder="Masukkan Nomor Hp"  allowClear  prefix={<ContactsOutlined />} type="number" min={12} max={14} style={InputStyle} />
            </Form>
          </Modal>
        </>
      );
    };
export default ModalContact;