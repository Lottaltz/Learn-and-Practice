import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './index.css'
import useFormData from './FormDataContext'

const Admin = () => {
    // const [name,setName] = useState('');
    // const [lastName,setLastName] = useState('');
    // const [position,setPosition] = useState('');
    const {dataArray, setDataArray, newData, setNewData} = useFormData();

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // }
    // const handleLastNameChange = (event) => {
    //     setLastName(event.target.value);
    // }
    // const handlePositionChange = (event) => {
    //     setPosition(event.target.value);
    // }
    // const [counter,setCounter] = useState(1);
    // const generateID = () => {
    //     const nextID = `E${String(counter).padStart(3, '0')}`;
    //     setCounter(counter + 1);
    //     return nextID;
    // }
    useEffect(()=>{
        const mockData = [
            { id:'E001', name: 'Harry', lastname: 'Potter', position: 'Senior Software Developer'},
            { id:'E002', name: 'Hermione', lastname: 'Granger', position: 'Product Manager'},
            { id:'E003', name: 'Ronald', lastname: 'Weasley', position: 'Junior Software Developer'},
            { id:'E004', name: 'Draco', lastname: 'Malfoy', position: 'Business Analyst'},
          ];
        setDataArray(mockData);
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        // generate ID which ech ID start with E and followed by number : format 'E001'
        const userData ={
            id: `E00${dataArray.length + 1}`,
            name: newData.name,
            lastname: newData.lastname,
            position: newData.position,
        }
        console.log(userData);
        setDataArray([...dataArray, userData]); //add data to array
        setNewData({name:'',lastname:'',position:''});
    }

    const handleDelete = (id) => {
        const updateDataArray = dataArray.filter((userData) => userData.id !== id);
        setDataArray(updateDataArray);
    }

    return (
        <Layout>
            <div className="admin-page">
                <h1 className='admin-h1'>Generation Thailand</h1>
                <h2 className='admin-h2'>Home - Admin Sector</h2>
                <div className="btn-role">
                    <Link to='/user'><button className='btn-user'>User</button></Link>
                    <Link to='/admin'><button className='btn-admin'>Admin</button></Link>
                </div>
                <div className="create-user-data">
                    <h2>Create User</h2>
                    <form onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Name' 
                    value={newData.name} onChange={(e) => setNewData({...newData, name: e.target.value})}/>
                    <input type="text" name="lastname" id="lastname" placeholder='Last Name' 
                    value={newData.lastName} onChange={(e) => setNewData({...newData, lastname: e.target.value})}/>
                    <input type="text" name="position" id="position" placeholder='Position' 
                    value={newData.position} onChange={(e) => setNewData({...newData, position: e.target.value})}/>
                    <button type='submit' className='btn-save-data'>Save</button>
                    </form>
                </div>
                <TableData dataArray={dataArray} handleDelete={handleDelete}/>
            </div>
        </Layout>
    )
}
const TableData = ({dataArray,handleDelete}) => {
    return (
        <table className='admin-table'>
            <thead>
                <tr>
                    <th className='th-admin'>Name</th>
                    <th className='th-admin'>Last Name</th>
                    <th className='th-admin'>Position</th>
                    <th className='th-admin'>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataArray.map((userData) =>
                    <tr key={userData.id}>
                    <td>{userData.name}</td>
                    <td>{userData.lastname}</td>
                    <td>{userData.position}</td>
                    <td><button className='delete-action' onClick={() => handleDelete(userData.id)}>DELETE</button></td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Admin