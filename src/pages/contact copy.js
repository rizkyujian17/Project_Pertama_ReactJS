import React, { useEffect, useState } from 'react';
import ModalContact from '../components/ModalContact';
import TableContacts from '../components/tableContacts';
import { Button } from 'antd';
const containerStyle = {
    position: 'relative',
    height: '200px',
    padding: '48px',
    textAlign: 'center'
}


//Main//
const Contact = () => {
    const [isOpenModal,setOpenModal] = useState(false)
    const [thisForm,setForm] = useState(null)
    const setIsOpenModal = (v = null) => {
        if(v === null) setOpenModal(!isOpenModal)
        else setOpenModal(v)
    }
    const handleEdit =(v) =>{
        setForm(v)
        setIsOpenModal()
    } 
    return (
        <>
        <div style={containerStyle}>
            <h1>Daftar Contact</h1> 
            <Button type="primary" onClick={setIsOpenModal} >
            Tambah 
            </Button>
            <ModalContact isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} formIni={thisForm} />     
        </div>
        <div   style={{
          padding: '0 50px',
        }}>
           <TableContacts handleEdit={handleEdit}  />
        </div>
        </>
    );
}

export default Contact;
