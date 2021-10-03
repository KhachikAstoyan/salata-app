import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import OrderList from "./components/pages/OrderList";
import AddOrder from "./components/pages/AddOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <div className="App font-Comfortaa">
            <Header pageName="Orders" btnName="Add Order" btnLink="/addOrder" />
            <OrderList />
          </div>
        </Route>
        <Route path="/addOrder">
          <div className="App font-Comfortaa">
            <Header pageName="Add Order" btnName="Orders" btnLink="orders" />
            <AddOrder />
          </div>
        </Route>
        <Route path="/">
          <Redirect to="/addOrder" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
