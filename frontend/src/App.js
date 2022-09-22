import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/frontend/Home";

import MasterLayout from "./layouts/admin/MasterLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props}/>} component={MasterLayout}/>
          <Route path="/" component={Home}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
