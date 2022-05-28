import "./App.css";
import Landing from "./Landing"
import Model1 from "./components/Model1"
import Model2 from "./components/Model2"
import Model3 from "./components/Model3"
import Model4 from "./components/Model4"
import Model5 from "./components/Model5"
import Model6 from "./components/Model6"
import Model7 from "./components/Model7"
import Model8 from "./components/Model8"
import Model9 from "./components/Model9"
import Model10 from "./components/Model10"
import Model11 from "./components/Model11"
import Model12 from "./components/Model12"

import React from "react";
// import fabrik from "./components/images/fabrik_full_logo.png";
import {
  BrowserRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";
export function App() {
  return (
   <>
<Router>
  <Switch>
          <Route exact path="/model1">
            <Model1/>
          </Route>
          <Route exact path="/model2">
            <Model2/>
          </Route>
          <Route exact path="/model3">
            <Model3/>
          </Route>
          <Route exact path="/model4">
            <Model4/>
          </Route>
          <Route exact path="/model5">
            <Model5/>
          </Route>
          <Route exact path="/model6">
            <Model6/>
          </Route>
          <Route exact path="/model7">
            <Model7/>
          </Route>
          <Route exact path="/model8">
            <Model8/>
          </Route>
          <Route exact path="/model9">
            <Model9/>
          </Route>
          <Route exact path="/model10">
            <Model10/>
          </Route>
          <Route exact path="/model11">
            <Model11/>
          </Route>
          <Route exact path="/model12">
            <Model12/>
          </Route>
        <Landing/>
  </Switch>

</Router>
   </>
  );
}

export default App;
