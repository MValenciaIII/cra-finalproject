import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import About from './About'
import Createform from './Createform'
import Contact from './Contact'
import Footer from './Footer';


const App = () => {
  return (
    
      <>
        <Header />
          <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/about" component={About} />
              <Route path="/create" component={Createform} />
              <Route path="/contact" component={Contact} />
          </Switch> 
        <Footer />
      </>
    
  );
}

export default App;
