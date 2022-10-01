import { Routes, Route} from 'react-router-dom'

import { Navbar } from "./components/Navbar";
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import Singlepage from './pages/Singlepage';


const  App =() =>{
  return (
<>
    <Navbar />
    <div className="container">
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/single' element={<Singlepage/>} />
          </Routes> 
    </div> 
</>  
  );
}

export default App;
