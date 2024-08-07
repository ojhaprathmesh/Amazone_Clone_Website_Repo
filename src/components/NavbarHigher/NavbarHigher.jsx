import React, { useState } from "react";
import assets from "../../assets/assets";
import LanguageSelectionModal from "../Modals/LanguageSelectionModal";
import useCountryCode from "../Hooks/LocationHook";
import useLanguage from "../Hooks/LanguageHook";
import "./NavbarHigher.css";

function NavbarHigher({ personalDetail = { name: "", city: "", pincode: "" }, onDetailsClick }) {
  const { getFlagUrl } = useCountryCode();
  const { currentLanguage, handleLanguageChange: changeLanguage, currentLangDetails } = useLanguage();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  // Wrapper function to handle language change and close modal
  const handleChangeLanguage = (langCode) => {
    changeLanguage(langCode); // Change language
    setIsLangModalOpen(false); // Close the modal
  };

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
            <button id="category">All
              <div className="triangle-down"></div>
            </button>
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
        <div className="lang" onClick={() => setIsLangModalOpen(!isLangModalOpen)}>
          {getFlagUrl() && (
            <img className="flag-icon" src={getFlagUrl()} alt="Country Flag" />
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
      <LanguageSelectionModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        onSelectLanguage={handleChangeLanguage}
        currentLanguage={currentLanguage}
      />
    </nav>
  );
}

export default NavbarHigher;
