import axios from 'axios'

export const postContact = async(values)=>{
    const addingUSer = await axios.post('http://localhost:5001/auth/register',{...values})
}

export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get('http://localhost:5001/auth/account',{headers:{Authorization:token}} );
    return data 
}

export const postLogin = async(values)=>{
    const LogUser = await axios.post('http://localhost:5001/auth/login',{...values})

}