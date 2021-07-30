import React, { useState, Suspense } from "react";
import { graphql, useLazyLoadQuery } from "react-relay"
import List from "./List"

function OrderPage() {

    const [language, setLanguage] = useState("en-US");
    const [delay, setDelay] = useState(1);
    return (
        <div className="main">
            <div className="header">
                <h1 className="main-item">Orders</h1>
                <div className="input-field">
                    <select className="browser-default option1" onChange={event => {
                        setLanguage(event.target.value);
                    }}
                        defaultValue={language}
                    >
                        <option value="en-US">English</option>
                        <option value="es-US">Spanish</option>
                    </select>
                </div>
                <div className="input-field Delay">
                    <select className="browser-default option1" onChange={event => {
                        setDelay(parseInt(event.target.value));
                    }}
                        defaultValue={delay}
                    >
                        <option value="1">1 second</option>
                        <option value="5">5 seconds</option>
                    </select>
                </div>
            </div>
            <Suspense fallback={
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            }>
                <List language={language} delay={delay} />
            </Suspense>
        </div>
    )
}

export default OrderPage;