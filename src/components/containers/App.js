import React from 'react';
import Player from './Player';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={Player} />
        <Route exact path="/:activeVideo" component={Player} />
      </Switch>
      <GlobalStyle />
    </>
  </Router>

)

export default App;