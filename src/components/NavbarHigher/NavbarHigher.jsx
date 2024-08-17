import React, { useState } from "react";
import assets from "../../assets/assets";
import LanguageSelectionModal from "../Modals/LanguageSelectionModal";
import AccountDetailsModal from "../Modals/AccountDetailsModal";
import useCountryCode from "../Hooks/LocationHook";
import useLanguage from "../Hooks/LanguageHook";
import "./NavbarHigher.css";

function NavbarHigher({ personalDetail = { name: "", city: "", pincode: "" }, onDetailsClick }) {
    const { translate, currentLanguage, handleLanguageChange, currentLangDetails } = useLanguage();
    const { getFlagUrl } = useCountryCode();
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
    const [isUserHovered, setIsUserHovered] = useState(false);
    const [isAccountModalHovered, setIsAccountModalHovered] = useState(false);

    const handleChangeLanguage = (langCode) => {
        handleLanguageChange(langCode);
        setIsLangModalOpen(false);
    };

    const handleMouseEnterUser = () => {
        setIsUserHovered(true);
        setIsAccountModalOpen(true);
    };

    const handleMouseLeaveUser = () => {
        setIsUserHovered(false);
        setTimeout(() => {
            if (!isAccountModalHovered) {
                setIsAccountModalOpen(false);
            }
        }, 100); // Small delay to allow for hover transition
    };

    const handleMouseEnterAccountModal = () => {
        setIsAccountModalHovered(true);
    };

    const handleMouseLeaveAccountModal = () => {
        setIsAccountModalHovered(false);
        setTimeout(() => {
            if (!isUserHovered) {
                setIsAccountModalOpen(false);
            }
        }, 100); // Small delay to allow for hover transition
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
                            <span className="loc-line" id="loc-line-1">
                                {currentLanguage === 'HI' 
                                    ? `${personalDetail?.name} ${translate('deliver_to')}` 
                                    : `${translate('deliver_to')} ${personalDetail?.name}`}
                            </span>
                            <span className="loc-line" id="loc-line-2">{personalDetail?.city} {personalDetail?.pincode}</span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="high-mid">
                <div className="search">
                    <div className="bar">
                        <button id="category">{translate('all')}
                            <div className="triangle-down"></div>
                        </button>
                    </div>
                    <div className="bar">
                        <input id="search-text" type="text" placeholder={translate('search_placeholder')} />
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
                    onMouseEnter={() => setIsLangModalOpen(true)} 
                    onMouseLeave={() => {
                        if (!isUserHovered) {
                            setIsLangModalOpen(false);
                        }
                    }}
                >
                    {getFlagUrl() && (
                        <img className="flag-icon" src={getFlagUrl()} alt="Country Flag" />
                    )}
                    <span>{currentLangDetails?.code}</span>
                </div>
                <div 
                    className="user"
                    onMouseEnter={handleMouseEnterUser}
                    onMouseLeave={handleMouseLeaveUser}
                >
                    <div id="profile">{translate('profile')}</div>
                    <div className="lists">{translate('lists')}</div>
                    <div className="account">{translate('account')}</div>
                </div>
                <div className="return-order">
                    <div id="returns">{translate('returns')}</div>
                    <div id="orders">{translate('orders')}</div>
                </div>
                <div id="cart">{translate('cart')}</div>
            </div>
            <LanguageSelectionModal
                isOpen={isLangModalOpen}
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => {
                    setIsUserHovered(false);
                    setIsLangModalOpen(false);
                }}
                onClose={() => setIsLangModalOpen(false)}
                onSelectLanguage={handleChangeLanguage}
                currentLanguage={currentLanguage}
            />
            <AccountDetailsModal
                isOpen={isAccountModalOpen}
                onClose={() => setIsAccountModalOpen(false)}
                onMouseEnter={handleMouseEnterAccountModal}
                onMouseLeave={handleMouseLeaveAccountModal}
            />
        </nav>
    );
}

export default NavbarHigher;
