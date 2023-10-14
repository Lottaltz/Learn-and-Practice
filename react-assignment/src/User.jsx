import React, { useEffect } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import useFormData from './FormDataContext'
import './index.css'



const User = () => {
    const {dataArray} = useFormData();
    
    return (
        <Layout>
            <div className="user-page">
                <h1 className='user-h1'>Generation Thailand</h1>
                <h2 className='user-h2'>Home - User Sector</h2>
                <div className="btn-role">
                    <Link to='/user'><button className='btn-user'>User</button></Link>
                    <Link to='/admin'><button className='btn-admin'>Admin</button></Link>
                </div>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th className='th-user'>Name</th>
                            <th className='th-user'>Last Name</th>
                            <th className='th-user'>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((userData) => (
                            <tr key={userData.id}>
                                <td>{userData.name}</td>
                                <td>{userData.lastname}</td>
                                <td>{userData.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}



export default User