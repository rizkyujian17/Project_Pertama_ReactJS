import React, { useEffect, useState } from 'react';
import { Space, Table} from 'antd';
import {Modal, Input, Form, Select} from 'antd';
import { UserOutlined, ContactsOutlined} from '@ant-design/icons';


const TableContacts = ({ handleEdit }) => {
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
  const [page,setPage] = useState(1);
  const [pageSize,setPageSize]=useState();
  const [totalPage, setTotalPage]=useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
    
      useEffect(() => {
          setLoading(true); 
          fetch(`http://127.0.0.1:8000/api/contacts/?page=${page}`)
            .then(response => response.json())
            .then(data => {  
              const modifiedData = data.data.data.map((item) => {
                return {
                  key: item.id,
                  name: item.name,
                  j_kelamin: item.j_kelamin,
                  no_hp: item.no_hp,
                };
              });
              
              setData(modifiedData);
              setPage(data.data.current_page);
              setPageSize(data.data.per_page);
              setTotalPage(data.data.total)
              // console.log(pageInfo)
              setLoading(false);
            })
            .catch(error => {
              console.error(error);
            });
        }, [page]);
   


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
      // const onChange = (page) =>{
      //   console.log('onchangenyua :',page.data)
      // } 
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
              alert("Data Berhasil diHapus")
              window.location.reload(true);
            })
            .catch(error => {
              console.error(error);
            });
            setLoading(false)
            setModalVerify(false);
            
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

            <Table columns={columns} dataSource={data} loading={loading} 
            pagination={{current:page,pageSize:pageSize,total:totalPage,
              onChange:(page,pageSize)=>{
                setPage(page);
                setPageSize(pageSize)
                console.log(page,'dan',pageSize)
                
                }}}  />
            </>
        )
}


export default TableContacts;