import React from "react";
import "./LanguageSelectionModal.css";

export const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "Hindi" },
    { code: "TA", name: "Tamil" },
    { code: "TE", name: "Telugu" },
    { code: "KN", name: "Kannada" },
    { code: "MR", name: "Marathi" },
    { code: "BN", name: "Bengali" },
    { code: "ML", name: "Malayalam" },
];

function LanguageSelectionModal({ onClose, onSelectLanguage }) {
    return (
        <div className="lang-modal-overlay" onClick={onClose}>
            <div className="lang-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>Select Language</h2>
                <ul>
                    {languages.map(lang => (
                        <li key={lang.code} onClick={() => onSelectLanguage(lang.code)}>
                            {lang.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LanguageSelectionModal;
