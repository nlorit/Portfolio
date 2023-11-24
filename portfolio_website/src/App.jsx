import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/components/Home';
import About from './app/components/About';


const App = () => {
  return (
      <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
      </Routes>
  )    
}

export default App;
