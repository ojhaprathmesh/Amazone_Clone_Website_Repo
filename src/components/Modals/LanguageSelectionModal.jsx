import React from "react";
import { useTranslation } from 'react-i18next';
import "./LanguageSelectionModal.css";

export const languages = [
  { code: "EN", name: "EN - English" },
  { code: "HI", name: "HI - हिंदी" },
  { code: "TA", name: "TA - தமிழ்" },
  { code: "TE", name: "TE - తెలుగు" },
  { code: "KN", name: "KN - ಕನ್ನಡ" },
  { code: "MR", name: "MR - मराठी" },
  { code: "ML", name: "ML - മലയാളം" },
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
              <input
                type="radio"
                id={`lang-${lang.code}`}
                name="language"
                value={lang.code}
                checked={currentLanguage === lang.code}
                onChange={() => onSelectLanguage(lang.code)}
              />
              <label htmlFor={`lang-${lang.code}`}>{lang.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelectionModal;
