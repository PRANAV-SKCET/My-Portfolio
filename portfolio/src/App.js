import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/certificates" element={<Certificates/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
