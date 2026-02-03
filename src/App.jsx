// src/App.jsx
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'; // <--- Importamos
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Skills />
      <Projects />
       
    </div>
  );
}

export default App;