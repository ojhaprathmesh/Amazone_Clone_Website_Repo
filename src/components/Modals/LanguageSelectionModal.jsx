import React from "react";
import { useTranslation } from 'react-i18next';
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

function LanguageSelectionModal({ isOpen, onClose, onSelectLanguage, currentLanguage }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="lang-modal-overlay" onClick={onClose}>
      <div className="lang-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{t('select_language')}</h2>
        <ul>
          {languages.map(lang => (
            <li
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code)}
              className={currentLanguage === lang.code ? "selected" : ""}
            >
              {lang.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelectionModal;
