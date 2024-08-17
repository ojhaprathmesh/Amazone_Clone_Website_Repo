import React from "react";
import "./AccountDetailsModal.css";

function AccountDetailsModal({ isOpen, onClose, onMouseEnter, onMouseLeave }) {
    if (!isOpen) return null;

    return (
        <div
            className="account-modal-overlay"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="account-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>Your Account</h2>
                <div className="account-sections">
                    <div className="section">
                        <h3>Buy it again</h3>
                        <ul>
                            <li><a href="#">View All & Manage</a></li>
                            <li>
                                <a href="#">Maange 20 Pcs Professional Makeup Brush Set</a>
                                <button>Add to cart</button>
                            </li>
                            <li>
                                <a href="#">Himalaya Erina Coat Cleanser For Dog And Cat</a>
                                <button>Add to cart</button>
                            </li>
                            <li>
                                <a href="#">Himalaya Wellness Company, Erina EP Powder</a>
                                <button>Add to cart</button>
                            </li>
                            <li>
                                <a href="#">Small and Portable Flexible Tripod for Raspberry Pi</a>
                                <button>Add to cart</button>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>Your Lists</h3>
                        <ul>
                            <li><a href="#">Alexa Shopping List</a></li>
                            <li><a href="#">Dream Computer</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Devices</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Gift</a></li>
                            <li><a href="#">See more</a></li>
                            <li><a href="#">Create a Wish List</a></li>
                            <li><a href="#">Wish from Any Website</a></li>
                            <li><a href="#">Baby Wishlist</a></li>
                            <li><a href="#">Discover Your Style</a></li>
                            <li><a href="#">Explore Showroom</a></li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>Your Account</h3>
                        <ul>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Your Orders</a></li>
                            <li><a href="#">Your Wish List</a></li>
                            <li><a href="#">Keep shopping for</a></li>
                            <li><a href="#">Your Recommendations</a></li>
                            <li><a href="#">Recalls and Product Safety Alerts</a></li>
                            <li><a href="#">Your Prime Membership</a></li>
                            <li><a href="#">Your Prime Video</a></li>
                            <li><a href="#">Your Subscribe & Save Items</a></li>
                            <li><a href="#">Memberships & Subscriptions</a></li>
                            <li><a href="#">Your Seller Account</a></li>
                            <li><a href="#">Content Library</a></li>
                            <li><a href="#">Devices</a></li>
                            <li><a href="#">Your Free Amazon Business Account</a></li>
                            <li><a href="#">Switch Accounts</a></li>
                            <li><a href="#">Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountDetailsModal;
