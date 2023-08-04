import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import ListContact from './Components/ListContact/ListContact';
import NavContact from './Components/Navbar/NavContact'
import UpdateContact from './Components/UpdateContact/UpdateContact';
import AddContact from './Components/AddContact/AddContact';
import About from './Components/About/About';
import Contacus from './Components/Contactus/Contacus';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
function App() {
  return (
    <div>
        <NavContact/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/list' element={ <ListContact/>}/>
            <Route path='/add' element={<AddContact/>}/>
            <Route path='/update/:id' element={ <UpdateContact/>}/>
            <Route path='/about' element={ <About/>}/>
            <Route path='/contactus' element={ <Contacus/>}/>
            <Route path='/register' element={ <Register/>}/>
            <Route path='/login' element={ <Login/>}/>

        </Routes>
    </div>
  );
}

export default App;