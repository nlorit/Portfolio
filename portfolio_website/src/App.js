import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header/Header';
import Navbar from './app/components/Navbar/Navbar';
import Footer from './app/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
