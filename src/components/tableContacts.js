import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';





function TableContacts() {
    const [data,setData] = useState();
    const [loading, setLoading] = useState(false);
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

      const handleEdit =(v) =>{
       
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
            console.log(v)
            return  <Space size="middle">
            <a onClick={()=> handleEdit(v)}>edit</a>
            <a>Delete</a>
          </Space>
          },
        },
      ];
  

        return (
            <>
           
            <Table columns={columns} dataSource={data} loading={loading} />; 
            </>
        )
}


export default TableContacts;