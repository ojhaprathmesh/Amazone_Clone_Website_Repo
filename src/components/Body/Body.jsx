import React from "react";
import Offers from "../Offers/Offers";
import History from "../History/History";
import "./Body.css";

function Body() {
    return (
        <div className="body-container">
            <Offers />
            <History />
        </div>
    );
}

export default Body;
