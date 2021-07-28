import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {RelayEnvironmentProvider} from "react-relay";
import Environment from "./relay/environment";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import OrderComponent from "../client/OrderList/OrderComponent"
import "../client/OrderList/style.css"

const Root = () => {
   return <RelayEnvironmentProvider environment = {Environment}>
   <Suspense fallback= {<div> Loading...</div>}>
     <div className = "container">
       <Router>
         <Switch>
           <Route path = "/">
             <OrderComponent />
           </Route>
         </Switch>
       </Router>
     </div>
     </Suspense>
 </RelayEnvironmentProvider>;};

ReactDOM.render(<Root />, document.querySelector("#root"));