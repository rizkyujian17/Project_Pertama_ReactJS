import React, { useEffect } from 'react';
import ModalContact from '../components/ModalContact';
import TableContacts from '../components/tableContacts';

const containerStyle = {
    position: 'relative',
    height: '200px',
    padding: '48px',
    textAlign: 'center'
}



//Main//
const Contact = () => {
    return (
        <>
        <div style={containerStyle}>
            <h1>Daftar Contact</h1> 
            <ModalContact/>     
        </div>
        <div   style={{
          padding: '0 50px',
        }}>
           <TableContacts/>
        </div>
        </>
    );
}

export default Contact;
