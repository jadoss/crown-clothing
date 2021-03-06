import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>     
    </div>
  );
}

export default App;
