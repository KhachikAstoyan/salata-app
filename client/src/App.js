import Header from "./components/Header";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div className="App font-Comfortaa">
      <Header pageName="Orders" />
      <OrderList />
    </div>
  );
}

export default App;
