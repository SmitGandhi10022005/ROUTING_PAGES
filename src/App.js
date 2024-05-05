
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar1 from './components/layouts/Navbar';
import { Home } from './components/pages/Home';
import { Pricing } from './components/pages/Pricing';
import { Features } from './components/pages/Features';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar1 />
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/Features' element={<Features/>}></Route>
        <Route path='/Pricing' element={<Pricing/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
