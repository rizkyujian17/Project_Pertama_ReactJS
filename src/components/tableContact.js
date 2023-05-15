import { Space, Table } from 'antd';
import { useState, useEffect } from 'react';

   

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
    title: 'no_hp',
    dataIndex: 'no_hp',
    key: 'no_hp',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const TableCard = () =>   {

    const [data, setData] = useState();
    useEffect(() =>{
        fetch('http://127.0.0.1:8000/api/contact/list', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
    })
    return(
        <>
        <Table columns={columns} dataSource={data} />;
        </>
    ); 
}  

export default TableCard;




