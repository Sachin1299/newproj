import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';

import TopNavbar from './Components/TopNavbar';
import {HashRouter,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Services from './Pages/Services';
import Enquiry from './Pages/Enquiry';
import Careers from './Pages/Careers';
import './style/Custom.css'
import Footer from './Components/Footer';
function App() {
  return (
    <>
   
    <HashRouter>
  
    <TopNavbar />
    <CustomNavbar/>
  
    <Routes>
    
      <Route path='/' element={<HomePage/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Enquiry' element={<Enquiry/>}/>
      <Route path='/Careers' element={<Careers/>}/> 

    </Routes>
    <Footer />
    </HashRouter>
    </>
  );
}

export default App;
