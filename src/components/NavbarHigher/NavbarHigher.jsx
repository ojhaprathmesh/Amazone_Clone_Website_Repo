import React, { useState } from "react";
import assets from "../../assets/assets";
import "./NavbarHigher.css";
import LanguageSelectionModal, { languages } from "../Modals/LanguageSelectionModal";
import useCountryCode from "../APIs/LocationAPI";

function NavbarHigher({ personalDetail = { name: "", city: "", pincode: "" }, onDetailsClick }) {
    const countryCode = useCountryCode();
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("EN"); // Default language

    const handleLanguageChange = (code) => {
        setCurrentLanguage(code);
        setIsLangModalOpen(false);
    };

    const currentLangDetails = languages.find(lang => lang.code === currentLanguage);

    return (
        <nav className="navbar-higher">
            <div className="high-left">
                <div className="logo">
                    <img src={assets.images.pageLogo} alt="Amazon Clone Logo" />
                </div>
                <div className="location" onClick={onDetailsClick}>
                    <span>
                        <img src={assets.images.location} id="loc-sprite" alt="Location Icon" />
                        <div className="loc-details">
                            <span className="loc-line" id="loc-line-1">Deliver to {personalDetail?.name}</span>
                            <span className="loc-line" id="loc-line-2">{personalDetail?.city} {personalDetail?.pincode}</span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="high-mid">
                <div className="search">
                    <div className="bar">
                        <button id="category">All</button>
                    </div>
                    <div className="bar">
                        <input id="search-text" type="text" placeholder="Search Amazon.in" />
                    </div>
                    <div className="bar">
                        <button id="search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="high-right">
                <div
                    className="lang"
                    onClick={() => setIsLangModalOpen(!isLangModalOpen)}
                >
                    {countryCode !== "Unknown" && (
                        <img className="flag-icon" src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`} alt="Country Flag" />
                    )}
                    <span>{currentLangDetails?.code}</span>
                </div>
                <div className="user">
                    <div id="profile">Profile</div>
                    <div className="lists">Lists</div>
                    <div className="account">Account</div>
                </div>
                <div className="return-order">
                    <div id="returns">Returns</div>
                    <div id="orders">Orders</div>
                </div>
                <div id="cart">Cart</div>
            </div>
            {isLangModalOpen && (
                <LanguageSelectionModal
                    onClose={() => setIsLangModalOpen(false)}
                    onSelectLanguage={handleLanguageChange}
                />
            )}
        </nav>
    );
}

export default NavbarHigher;
