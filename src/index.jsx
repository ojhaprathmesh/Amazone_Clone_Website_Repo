import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import assets from "./assets/assets"; // Ensure the correct path to assets

// Function to set the favicon dynamically
const setFavicon = (iconUrl) => {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
};

// Set the favicon using the amazonIcon
setFavicon(assets.images.amazonIcon);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
