import React from 'react';
import  { useState, useEffect } from 'react';
import { DatePicker, Card, Col, Row} from 'antd';
import { Select } from 'antd';
const { Option } = Select;


const containerStyle = {
  position: 'relative',
  padding: 48,
  textAlign: 'center',
}
const containerContent = {
  position: 'relative',
  padding: 10,
  // height : '180px',
  textAlign: 'center',
}

const JadwalSholat = () =>{
    const [tanggalSholat, setTanggalSholat] = useState({}); //simpan data tanggal yang dipilih
    const [jadwalSholat, setJadwalSholat] = useState({}); //simpan data jadwal sholat
    const [namaKota,setKota]= useState([]); //ambil nama kota untuk select
    const [idNamaKota,setIdNamaKota]= useState({}); //ambil id kota
    const [namaKotaTerpilih,setKotaTerpilih]= useState(); //ambil nama kota untuk card

    const namaKotaChange = (label,value) => {
        setIdNamaKota(value.value)
        setKotaTerpilih(value.label)
  };

    const onChange = (date, dateString) => {
        setTanggalSholat(dateString);  
    }

        useEffect(() => {
            fetch('https://api.banghasan.com/sholat/format/json/kota')
              .then(response => response.json())
              .then(data => {
                setKota(data.kota);
              })
              .catch(error => {
                console.error(error);
              });
          }, [])

          //base id kota dan tanggal
          useEffect(() => {
           
            fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${idNamaKota}/tanggal/${tanggalSholat}`)//kota padang 580
              .then(response => response.json())
              .then(data => {
                setJadwalSholat(data.jadwal.data);
              })
              .catch(error => {
                console.error(error);
              });
          }, [idNamaKota,tanggalSholat]);

    return (
        <>
            <div style={containerContent}>
                  <Select showSearch style={{width: 240,marginRight: '4px'}}
                      onChange={namaKotaChange}   placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }>
                      {namaKota.map((item) =>(
                          <Option label={item.nama} value={item.id}>
                          {item.nama}
                        </Option>
                      ))}
                  </Select>
                  <DatePicker onChange={onChange} />
            </div>
            <Row justify="space-between">
              
              <Col  xs={{
                span: 12,
                offset: 6,
                }}
              lg={{
                span: 6,
                offset: 2,
              }}
              xl={{
                span: 6,
                offset: 9, 
              }}
              style={{display:'flex', marginBottom:'16px'}}
              >
                  <Card
                      hoverable
                      style=
                      {{
                      containerContent
                      }}
                      cover={<img alt='judul' src='https://images.unsplash.com/photo-1570206913724-17f67ed3a6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGlzbGFtfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />}>
                        <h1 style={{textAlign : 'center'}}>Wilayah {namaKotaTerpilih}</h1><hr></hr>
                        <ul>
                        <li><p>Hari / Tanggal : {jadwalSholat.tanggal}</p></li>
                        <li><p>Imsak : {jadwalSholat.imsak}</p></li>
                        <li><p>Subuh : {jadwalSholat.subuh}</p></li>
                        <li><p>Zuhur : {jadwalSholat.dzuhur}</p></li>
                        <li><p>Ashar : {jadwalSholat.ashar}</p></li>
                        <li><p>Maghrib : {jadwalSholat.maghrib}</p></li>
                        <li><p>Isya : {jadwalSholat.isya}</p></li>
                        </ul>                      
                  </Card>
                  </Col>
              </Row>
        </>            
    );
  }
const Sholat = () => {
    return (
        <>
        <h1 style={containerStyle}>Jadwal Sholat Indonesia</h1>
        <JadwalSholat/>
        </>
    );
}

export default Sholat;
