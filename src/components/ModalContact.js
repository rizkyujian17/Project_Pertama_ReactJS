import { Modal, Input, Form, Select} from 'antd';
import { useState, useEffect } from 'react';
import { UserOutlined, ContactsOutlined} from '@ant-design/icons';

const ModalContact = ({ isModalOpen, setIsModalOpen, formIni=null }) => {
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

    const [form, setForm] = useState({
      name: '',
      j_kelamin: '',
      no_hp: '',
    });
    useEffect(() => {
      if (formIni !== null){
      // console.log(formIni);
        setForm(formIni)
      }
    },[formIni])

    const [loading, setLoading] = useState(false);
    //untuk menyimpan data form sementara

    const handleCancel = () => {
      setIsModalOpen(false);
      setForm({ name: '',
      j_kelamin: '',
      no_hp: '',})
    };
    const InputStyle  ={
      marginBottom:'8px',
      width:'100%'
    }
    //handle when ok clicked
    const HandleOk = () => { 
      if (form.key !== null){
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
              <Modal title="Pendaftaran" open={isModalOpen} onOk={HandleOk} onCancel={handleCancel}  loading={loading}>
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
                        value = {form.j_kelamin}
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
                    <Input placeholder="Masukkan Nomor Hp"  allowClear  prefix={<ContactsOutlined />} type="number" min={12} max={16} style={InputStyle} 
                        value = {form.no_hp}
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