import './App.css';
import { BrowserRouter, Routes,Link,Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
   <>

   <BrowserRouter>
   <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
   </ul>
   
   
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route index element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    


    <Route path='*' element={<NotFound />}/>

   </Routes>
   </BrowserRouter>


   </>
  );
}

export default App;
