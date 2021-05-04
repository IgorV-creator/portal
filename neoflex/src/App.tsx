import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'
import Home from "./components/pages/Home";
import LoginIn from "./components/pages/LoginIn";
import Adminpanel from "./components/pages/Adminpanel";

const App: React.FC = () => {
  return (
    <div className="Wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={LoginIn}/>
          <Route path="/adminpanel" component={Adminpanel}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
