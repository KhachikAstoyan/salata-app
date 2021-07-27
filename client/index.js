import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import ItemList from "./components/ItemList";
import {RelayEnvironmentProvider} from "react-relay";
import Environment from "./relay/environment";
import {HashRouter as Router,Switch,Route} from "react-router-dom";

const Root = () => {
   return <RelayEnvironmentProvider environment = {Environment}>
   <Suspense fallback= {<div> Loading...</div>}>
     <div className = "container">
       <Router>
         <Switch>
           <Route path = "/">
             <ItemList />
           </Route>
         </Switch>
       </Router>
     </div>
     </Suspense>
 </RelayEnvironmentProvider>;};

ReactDOM.render(<Root />, document.querySelector("#root"));