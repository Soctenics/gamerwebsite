// import logo from './logo.svg';
// import './App.css';
import './styles/styleone.css'
import Home from './pages/Home';
import Games from './pages/Games';
import Navigation from './components/Navigation';
import { Route, Routes } from "react-router-dom";
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/news" element={<News />} />
      </Routes>
      
    </div>
  );
}

export default App;
