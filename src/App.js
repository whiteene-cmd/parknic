import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Tips from './pages/Tips';
import Map from './pages/Map';
import AboutDetail from './pages/AboutDetail'
import Mywalk from './pages/Mywalk';

function App() {
  return (
     <div className='wrap'>
      <Navbar />

      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about/:id' element={<AboutDetail/>}/>
          <Route path='/tips' element={<Tips/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/mywalk' element={<Mywalk/>}/>
        </Routes>
      </main>
      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} Parknic</small>
      </footer>
     </div> 
  ); 
}

export default App;
