import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Home() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/")
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:5000/student/"+id)
            window.location.reload()
        }
        catch(err)
        {
            console.log(err);
        }
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center ailgn-items-center'>
        <div className='w-50 bg-white rounded p-5'>
        <h2> Student Database</h2><br/>
            <Link to="/create" className='btn btn-success'> Add New User </Link>

            <table className='table'>
                <thead>
                    <tr>
                        <td> Name </td>
                        <td> Email </td>
                        <td> Contact </td>
                        <td colSpan={2}> Action </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data,i) => (
                            <tr key={i}>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td> {data.contact} </td>
                                <td>
                                    <Link to={`update/${data.id}`}  className='btn btn-primary ms-2'> Update </Link>
                                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;