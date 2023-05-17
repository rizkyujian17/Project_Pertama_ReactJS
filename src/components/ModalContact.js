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
    //untuk menyimpan data form sementara
    const [form, setForm] = useState({
      name: '',
      j_kelamin: '',
      no_hp: '',
    });
    const showModal = () => {
      setLoading(true);// Mengatur loading menjadi true saat tombol diklik
        setTimeout(() => {
          setIsModalOpen(true); // Mengatur isModalOpen menjadi true setelah delay 2000 ms
          setLoading(false); // Mengatur loading menjadi false setelah isModalOpen diatur menjadi true
      }, 2000);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const InputStyle  ={
      marginBottom:'8px',
      width:'100%'
    }
    //handle when ok clicked
    const HandleOk = () => { 

      setIsModalOpen(false);
      setLoading(true);
      fetch('http://127.0.0.1:8000/api/contacts', {
        method: 'POST',
        body: JSON.stringify({
          name : form.name,
          j_kelamin: form.j_kelamin,
          no_hp : form.no_hp
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setLoading(false);
            setIsModalOpen(false);
            window.location.reload(true);
          })
          .catch(error => {
            console.error(error);
          });
          setLoading(false)
          setIsModalOpen(false);
    }

 
  
    return (
            <>
              <Button type="primary" onClick={showModal} loading={loading}>
                Tambah 
              </Button>
              <Modal title="Pendaftaran" open={isModalOpen} onOk={HandleOk} onCancel={handleCancel}  loading={loading}>
                <Form>
                    <Input placeholder="Masukkan Nama"  allowClear prefix={<UserOutlined />} style={InputStyle} 
                     onChange={e => {
                      setForm({
                        ...form,
                        name: e.target.value
                      });
                    }}
                    />
                    <Select placeholder="Jenis Kelamin"  allowClear   defaultValue='Jenis Kelamin' 
                         onChange={value => {
                          setForm({
                            ...form,
                            j_kelamin: value
                          });
                        }}
                        // onChange= {handleChange}
                        style={InputStyle} 
                        options={JenisKelamin.map((j) => ({
                        label:  j.label,
                        value:  j.value,
                        }))} />
                    <Input placeholder="Masukkan Nomor Hp"  allowClear  prefix={<ContactsOutlined />} type="number" min={12} max={14} style={InputStyle} 
                         onChange={e => {
                          setForm({
                            ...form,
                            no_hp: e.target.value
                          });
                        }}                    
                    />
                </Form>
              </Modal>
            </>
          );
};
export default ModalContact;