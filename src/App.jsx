import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar ';
import About from './components/About ';
import Home from './components/Home';
import Skills  from './components/Skills';
import Projects  from './components/Projects';
import Contacts  from './components/Contacts';
import Footer  from './components/Footer';

function App() {
  return (
    <div className='App'>
     
      <NavigationBar/>
      <Home/>
      <About />
      <Skills/>
      <Projects />
      <Contacts />
      <Footer />
     
      
    </div>
  );
}

export default App;