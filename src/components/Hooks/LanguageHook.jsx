import { useState } from "react";

const translations = {
  EN: {
    welcome: "Welcome to Amazon Clone",
    search_placeholder: "Search Amazon.in",
    profile: "Profile",
    lists: "Lists",
    account: "Account",
    returns: "Returns",
    orders: "Orders",
    cart: "Cart",
    select_language: "Select Language",
    all: "All",
    deliver_to: "Deliver to"
  },
  HI: {
    welcome: "अमेज़न क्लोन में आपका स्वागत है",
    search_placeholder: "Amazon.in पर खोजें",
    profile: "प्रोफ़ाइल",
    lists: "सूचियाँ",
    account: "खाता",
    returns: "वापसी",
    orders: "आदेश",
    cart: "कार्ट",
    select_language: "भाषा चुनें",
    all: "सभी",
    deliver_to: "को डिलीवर करें"
  },
  // Add other languages here...
};

export const languages = [
  { code: "EN", name: "EN - English" },
  { code: "HI", name: "HI - हिंदी" },
  { code: "TA", name: "TA - தமிழ்" },
  { code: "TE", name: "TE - తెలుగు  " },
  { code: "KN", name: "KN - ಕನ್ನಡ" },
  { code: "MR", name: "MR - मराठी" },
  { code: "ML", name: "ML - മലയാളം" },
];

const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN"); // Default language

  const handleLanguageChange = (code) => {
    setCurrentLanguage(code);
  };

  const translate = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const currentLangDetails = languages.find(lang => lang.code === currentLanguage);

  return { currentLanguage, handleLanguageChange, translate, currentLangDetails };
};

export default useLanguage;
