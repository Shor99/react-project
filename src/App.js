import './App.css';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import Servises from './components/Services';
import About from './components/About';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/services' element={<Servises />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
    
  );
}

export default App;
