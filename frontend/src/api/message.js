import axios from 'axios';

export const PostContact = async (values) => {
  try {
    const addMessage = await axios.post('http://localhost:5001/api/contactus', { ...values });
    console.log('Added message:', addMessage);
    return addMessage;
  } catch (error) {
    console.error('Error adding message:', error);
    throw error;
  }
};