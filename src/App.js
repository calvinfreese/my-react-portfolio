import React from 'react';
import Header from './components/Header';
import Projects from './components/Project';
import Footer from './components/Footer';
import About from "./components/About";

import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <main className="is-tall">
        <Switch>
          <Route exact path ="/" component={Projects} />
          
          <Route path="/about" component={About} />
        </Switch> 
        
      </main>
      <Footer />  
    </Router>
    
  );
}

export default App;
