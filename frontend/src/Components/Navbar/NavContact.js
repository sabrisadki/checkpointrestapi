import React, { useEffect } from 'react';
import './NavContact.css';
import { Link } from 'react-router-dom';
import { fetchAccount } from '../../api/authuser';
import { useDispatch, useSelector } from 'react-redux';
import { setAccounts } from '../../store/userSlice';
import { useNavigate } from 'react-router';

const NavContact = () => {
  const auth = useSelector(state => state.account);
  console.log('User after login =>', auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAccount = async () => {
    const data = await fetchAccount();
    console.log('Data after login', data);
    dispatch(setAccounts(data));
  };

  useEffect(() => {
    getAccount();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const token = localStorage.getItem('token');

  return token ? (
    <nav id="nav">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/list'}>Contacts</Link></li>
        <li><Link to={'/add'}>Add Contact</Link></li>
        <li><Link to={'/contactus'}>Contact US</Link></li>
        <li><Link to={'/about'}>About US</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  ) : (
    <nav id="nav">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/list'}>Contacts</Link></li>
        <li><Link to={'/add'}>Add Contact</Link></li>
        <li><Link to={'/contactus'}>Contact US</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/about'}>About US</Link></li>
      </ul>
    </nav>
  );
};

export default NavContact;