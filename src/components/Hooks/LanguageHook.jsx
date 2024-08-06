import { useState } from "react";
import axios from "axios";
import { languages } from "../Modals/LanguageSelectionModal";

const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState("EN"); // Default language

    const handleLanguageChange = async (code) => {
        try {
            const response = await axios.post("https://libretranslate.com/translate", {
                q: "Hello",
                source: "en",
                target: code.toLowerCase(),
                format: "text"
            });
            console.log("Translation:", response.data);
            setCurrentLanguage(code);
        } catch (error) {
            console.error("Translation error:", error);
        }
    };

    const currentLangDetails = languages.find(lang => lang.code === currentLanguage);

    return { currentLanguage, handleLanguageChange, currentLangDetails };
};

export default useLanguage;
