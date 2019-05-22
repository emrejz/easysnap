import React from 'react';
import Header from './Header';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import sessionWrapperHOC from './sessionWrapperHOC';

const Root = () => {
  return(
  <BrowserRouter>
    <div> 
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>)
}
const RootWithSession=sessionWrapperHOC(Root)
function App() {
  return (
    <div id="app">
      <div className="container">
    
        <RootWithSession />
      </div>
    </div>

  );
}

export default App;
