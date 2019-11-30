import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Routing from './components/Routing';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="width-80 d-flex bg-col">
          <NavBar/>
          <Routing/>
        </div>
        
      
      </Router>
    )
  }
}

export default App;
