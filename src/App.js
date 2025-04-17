import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';

import TopNavbar from './Components/TopNavbar';
import {HashRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Enquiry from './Pages/Enquiry';
import ContactUs from './Pages/ContactUs';
import Careers from './Pages/Careers';
function App() {
  return (
    <>
    <HashRouter>
    <TopNavbar />
    <CustomNavbar/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Enquiry' element={<Enquiry/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/Careers' element={<Careers/>}/> 

    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
