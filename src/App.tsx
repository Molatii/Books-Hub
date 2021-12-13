import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from   './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SignIn from './components/Login/SingIn/SignIn';
import CompanyFees from './components/Pages/CompanyFees';
import Welcome from './components/WelcomePage/welcomePage';
import AdvertisingPlans from './components/Pages/AdvertisingPlans';
import Registration from './components/Login/Registration/Registration';
import ChoosenPlan from './components/Pages/ChoosenPlan';
import Dashboard from './components/DashBoard/dashboard';


function App() {
  return (
    <div className="App_container">        
        <Routes>  

          <Route path='/' element={<Welcome/>}/>
          <Route  path='/SignIn' element={<SignIn/>}/> 
          <Route path='/About-Us' element={<AboutUs/>}/> 
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/Contact-Us' element={<ContactUs/>}/>
          <Route  path='/Choosen-Plan' element={<ChoosenPlan/>}/>
          <Route  path='/Company-Fees' element={<CompanyFees/>}/>
          <Route  path='/Registration' element={<Registration/>}/>   
          <Route path='/AdvertisingPlans' element={<AdvertisingPlans/>}/>  
    
        </Routes>
    </div>
  );
}
export default App;
