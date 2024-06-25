import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import ContactInfo from './components/companyInfo/ContactInfo';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contactinfo' element={<ContactInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
