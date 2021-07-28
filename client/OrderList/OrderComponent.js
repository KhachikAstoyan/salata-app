import React, { useState } from "react";
import { Link } from "react-router-dom";


function OrderComponent() {
    const [selected, setSelected] = useState("1");
    console.log(selected);
    let className = "";
    if (selected === "1") {
        className = "option1"
    } else if (selected === "2") {
        className = "option2"
    }

    else if (selected === "3") {
        className = "option3"
    }
    
    return (
        <div className="ordersList">
            <div className="listContainer">
                <div className="icon">
                    <i className="material-icons">chevron_right</i>
                </div>

                <div className="orderInfo">
                    <div className="orderID">Order #23651325 - 2 items</div>
                    <div className="orderName">For Khachik Astoyan</div>
                </div>

                <div className="optionCont">
                    <div className="input-field col s12">
                        <select className={`browser-default ${className}`} onChange={(event) => {
                            setSelected(event.target.value);
                        }} defaultValue="1">
                            <option value="1" className="option1">Not started</option>
                            <option value="2" className="option2">Completed</option>
                            <option value="3" className="option3">In progress</option>
                        </select>
                    </div>


                </div>






            </div>







            <Link to="/">
            </Link>
        </div>
    )

}

export default OrderComponent;