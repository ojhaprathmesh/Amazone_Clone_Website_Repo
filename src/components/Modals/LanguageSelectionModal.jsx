import React from "react";
import useLanguage, { languages } from "../Hooks/LanguageHook";
import "./LanguageSelectionModal.css";

function LanguageSelectionModal({ isOpen, onClose, onSelectLanguage, currentLanguage, onMouseEnter, onMouseLeave }) {
  const { translate } = useLanguage();
  if (!isOpen) return null;

  return (
    <div 
        className="lang-modal-overlay" 
        onClick={onClose} 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
    >
      <div className="lang-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{translate('select_language')}</h2>
        <ul>
          {languages.map(lang => (
            <li
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code)}
              className={currentLanguage === lang.code ? "selected" : ""}
            >
              <input type="radio" checked={currentLanguage === lang.code} readOnly />
              {lang.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelectionModal;
