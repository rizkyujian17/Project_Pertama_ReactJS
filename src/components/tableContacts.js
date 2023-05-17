import React, { useEffect, useState } from 'react';
import { Space, Table} from 'antd';
import {Modal, Input, Form, Select} from 'antd';
import { UserOutlined, ContactsOutlined} from '@ant-design/icons';


function TableContacts() {
    const [data,setData] = useState();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
      name: '',
      j_kelamin: '',
      no_hp: '',
    });
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
  const [modalVerify, setModalVerify] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setLoading(true); 
        fetch('http://127.0.0.1:8000/api/contacts')
          .then(response => response.json())
          .then(data => {
            const modifiedData = data.data.map((item) => {
              return {
                key: item.id,
                name: item.name,
                j_kelamin: item.j_kelamin,
                no_hp: item.no_hp,
              };
            });
            setData(modifiedData);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);


      const InputStyle  ={
        marginBottom:'8px',
        width:'100%'
      }

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Jenis Kelamin',
          dataIndex: 'j_kelamin',
          key: 'j_kelamin',
        },
        {
          title: 'Nomor Hp',
          dataIndex: 'no_hp',
          key: 'no_hp',
        },
        {
          title: 'Action',
          key: 'action',
          render: (v) => {
            return  <Space size="middle">
            <a onClick={()=> handleEdit(v)}>edit</a>
            <a onClick={()=> handlePrevDelete(v)}>delete</a>
          </Space>
          },
        },
      ];
      const handleEdit =(v) =>{
        setForm(v)
        setLoading(true);// Mengatur loading menjadi true saat tombol diklik
        setTimeout(() => {
          setIsModalOpen(true); // Mengatur isModalOpen menjadi true setelah delay 2000 ms
          setLoading(false); // Mengatur loading menjadi false setelah isModalOpen diatur menjadi true
      }, 2000);
      } 
      const handlePrevDelete = (v)=>{
      setForm(v)
      setModalVerify(true);
        
      }
      const handleOkDelete =() =>{
        setIsModalOpen(false);
        setLoading(true);
        fetch(`http://127.0.0.1:8000/api/contacts/${form.key}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setLoading(false);
              setModalVerify(false);
              window.location.reload(true);
            })
            .catch(error => {
              console.error(error);
            });
            setLoading(false)
            setModalVerify(false);
      }
      const handleOk=() =>{
        setIsModalOpen(false);
        setLoading(true);
        fetch(`http://127.0.0.1:8000/api/contacts/${form.key}`, {
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
  
      const handleCancel = () => {
        setIsModalOpen(false);
        setModalVerify(false)
      };

        return (
            <>
                <Modal title="Hapus data" open={modalVerify} onCancel={handleCancel} onOk={handleOkDelete}style={{color:"#c1121f"}}>
                  Apa anda yakin menghapus "{form.name}" 
                </Modal>
                <Modal title="Edit Pendaftaran" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  loading={loading}>
                <Form>
                    <Input placeholder="Masukkan Nama"  allowClear prefix={<UserOutlined />} style={InputStyle} 
                     onChange={e => {
                      setForm({
                        ...form,
                        name: e.target.value
                      });
                    }}
                    value = {form.name}
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
                        }))}
                        value = {form.j_kelamin} />
                    <Input placeholder="Masukkan Nomor Hp"  allowClear  prefix={<ContactsOutlined />} type="number" min={14} max={16} style={InputStyle} 
                         onChange={e => {
                          setForm({
                            ...form,
                            no_hp: e.target.value
                          });
                        }}  
                        value = {form.no_hp}                  
                    />
                </Form>
                </Modal>
            <Table columns={columns} dataSource={data} loading={loading} />
            </>
        )
}


export default TableContacts;