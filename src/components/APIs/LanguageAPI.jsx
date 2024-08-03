import { useState } from "react";
import { languages } from "../Modals/LanguageSelectionModal";

const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState("EN"); // Default language

    const handleLanguageChange = (code) => {
        setCurrentLanguage(code);
    };

    const currentLangDetails = languages.find(lang => lang.code === currentLanguage);

    return { currentLanguage, handleLanguageChange, currentLangDetails };
};

export default useLanguage;
