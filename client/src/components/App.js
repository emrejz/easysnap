import React from 'react';
import Header from './Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Join from './pages/Join';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import sessionWrapperHOC from './sessionWrapperHOC';

const Root = ({refetch,session}) => {
  return(
  <BrowserRouter>
    <div> 
      <Header session={session} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" render={()=><Login refetch={refetch}/>} />
        <Route path="/join" render={()=><Join refetch={refetch}/>}/> 
        <Route path="/profile" render={()=><Profile session={session}/>}/> 
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
