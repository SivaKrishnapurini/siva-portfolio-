import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';

const App =()=>{
  return(
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App