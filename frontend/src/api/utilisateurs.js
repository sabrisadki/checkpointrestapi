import axios from 'axios'

export const fetchAccounts = async()=>{
    const {data} = await axios.get('http://localhost:5001/auth/all')
    return data 
}