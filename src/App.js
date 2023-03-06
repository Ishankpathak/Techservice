import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { Route , Routes  } from 'react-router-dom';
function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
