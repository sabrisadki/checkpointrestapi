import React,{useEffect, useState} from 'react'
import {updateContact,getUniqueUser} from '../../api/contact'
import { useNavigate,useParams } from 'react-router';
import '/home/sabri/Desktop/contactlistproject/frontend/src/Components/UpdateContact/UpdateContact.css'

const UpdateContact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [adresse,setAdresse]=useState('')
const [age,setAge]=useState(0)
const navigate = useNavigate()
const {id}=useParams()
const handeUpdat=async(idcon,values)=>{
await updateContact(idcon,values)
navigate('/list')
}

const getUniqueId=async(conatctid)=>{
const data = await getUniqueUser(conatctid)
setName(data.getuniqueuser.name)
setAdresse(data.getuniqueuser.adresse)
setAge(data.getuniqueuser.age)
setEmail(data.getuniqueuser.email)
}

useEffect(()=>{
if(id){getUniqueId(id)}
},[id])

return (
  <form className="formm">
      <h1>Update contact Form</h1>
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
      <button onClick={()=>handeUpdat({name,age,adresse,email})} >Update Contact</button>
    </div>
  </form>
)
}

export default UpdateContact