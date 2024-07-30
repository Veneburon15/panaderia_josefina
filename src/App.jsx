import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import ContactPage from './Pages/Contact/ContactPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsappButton';
import LunchService from './Pages/LunchService/LunchService';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='lunchService' element={<LunchService />} />
        </Routes>
        <WhatsAppButton/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
