//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List.js"
import './style/style.css';
const Root = () => {
   return <div>
      <List/>
   </div>;
};

ReactDOM.render(<Root />, document.querySelector("#root"));