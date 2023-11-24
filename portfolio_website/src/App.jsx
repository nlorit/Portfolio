import { Route, Routes } from 'react-router-dom';
import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Projects from './app/components/Projects/Projects';
import "../src/app/styles/App.css"


const App = () => {
  return (
      <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/projects" element={ <Projects/>}/>
      </Routes>
  )    
}

export default App;
