import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navegator from './components/Navegator.jsx'
import Home from './components/Home.jsx';
import News from './components/News.jsx';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navegator />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
