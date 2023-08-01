import axios from 'axios';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('http://localhost:5001/api/user/getuser');
    console.log('Fetched contacts:', data);
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const PostContact = async (values) => {
  try {
    const addingContact = await axios.post('http://localhost:5001/api/user/adduser', { ...values });
    console.log('Added contact:', addingContact);
    return addingContact;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const updateContact = async (id, values) => {
  try {
    const updated = await axios.put(`http://localhost:5001/api/user/updateuser/${id}`, values);
    console.log('Updated contact:', updated);
    return updated;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const deletedUser = await axios.delete(`http://localhost:5001/api/user/deleteuser/${id}`);
    console.log('Deleted contact:', deletedUser);
    return deletedUser;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

export const getUniqueUser = async (id, values) => {
  try {
    const { data } = await axios.get(`http://localhost:5001/api/user/getuser/${id}`, values);
    console.log('Fetched unique user details:', data);
    return data;
  } catch (error) {
    console.error('Error fetching unique user details:', error);
    throw error;
  }
};
