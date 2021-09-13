import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import OrderList from "./components/OrderList";
import AddOrder from "./components/pages/AddOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <div className="App font-Comfortaa">
            <Header pageName="Orders" />
            <OrderList />
          </div>
        </Route>
        <Route path="/addOrder">
          <Header pageName="Add Order" />
          <AddOrder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
