import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Adding a comment here to invalidate travis cache

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
          
        </header>
        <div>
          <Route exact path='/' component={Fib} />
          <Route exact path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
