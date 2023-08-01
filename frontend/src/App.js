import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import ListContact from './Components/ListContact/ListContact';
import NavContact from './Components/Navbar/NavContact'
import UpdateContact from './Components/UpdateContact/UpdateContact';
import AddContact from './Components/AddContact/AddContact';
import About from './Components/About';
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
        </Routes>
    </div>
  );
}

export default App;