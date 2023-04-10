import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/terms' component={Terms} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
