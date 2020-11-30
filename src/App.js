import React from 'react';
import Header from './components/Header';
import Projects from './components/Project';
import Footer from './components/Footer';
import About from "./components/About";

import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header />

      <main className="is-tall">
        <Route exact path ="/">
          <Projects />
        </Route>
        <Route exact path="/about" component={About} />
          
        
      </main>
      <Footer />  
    </Router>
    
  );
}

export default App;
