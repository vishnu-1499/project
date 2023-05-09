import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/create', {name, email, contact})
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center ailgn-items-center'>
        <div className='w-50 bg-white rounded p-5'>
            <form onSubmit={handleSubmit}>
                <h2> Add User </h2>
                <br/>

                <div className='mb-5'>
                    <label htmlFor='name'> Name: </label>
                    <input type='text' placeholder='John..' className='form-control' onChange={e=> setName(e.target.value)} />
                    <br/>

                    <label htmlFor='email'> Email: </label>
                    <input type='email' placeholder='john@gmail.com..' className='form-control' onChange={e=> setEmail(e.target.value)} />
                    <br/>

                    <label htmlFor='contact'> Contact: </label>
                    <input type='text' placeholder='9876543210..' className='form-control' onChange={e=> setContact(e.target.value)} />
                    <br/>

                    <button className='btn btn-success'> Submit </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact;