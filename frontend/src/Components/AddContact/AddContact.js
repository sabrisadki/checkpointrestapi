import React,{useState} from 'react'
import './AddContact.css'
import {PostContact} from '../../api/contact'
import { useNavigate } from 'react-router';

const AddContact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [adresse,setAdresse]=useState('')
const [age,setAge]=useState(0)
const navigate = useNavigate()
const handelAdd=async(values)=>{
 await PostContact(values)
 navigate('/list')
}
  return (
    <form className="form">
            <h1>Add contact Form</h1>
            <header> Contact card information <span class="message">Fill the form to continue.</span></header>
              <label>
              <span>Name</span>
                <input type="text" className="input" name="Name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>
              <label>
              <span>Age</span>
              <input type="number" className="input" name="age" placeholder="age"   value={age} onChange={(e)=>setAge(e.target.value)} />
              </label>
            <label>
              <span>Adresse</span>
              <input type="text" className="input" name="adresse" placeholder="adresse"  value={adresse} onChange={(e)=>setAdresse(e.target.value)} />
            </label>
            <label >
            <span>Email</span>
              <input type="email" className="input" name="Email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
            </label>
          <div className="submitCard">
            <button onClick={()=>handelAdd({name,age,adresse,email})} >Add Contact</button>
          </div>
        </form>
  )
}

export default AddContact