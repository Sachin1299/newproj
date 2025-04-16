import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';

import TopNavbar from './Components/TopNavbar';

function App() {
  return (
    <>
    <TopNavbar />
    <CustomNavbar/>
    <div className="overlay">
      {/* Your page content */}
    </div>
    </>
  );
}

export default App;
