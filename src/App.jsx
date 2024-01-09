import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/home/Home';

const App =()=>{
  return(
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App