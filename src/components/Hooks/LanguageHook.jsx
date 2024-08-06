import { useState, useEffect } from 'react';
import axios from 'axios';

const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  const [translatedTexts, setTranslatedTexts] = useState({});

  useEffect(() => {
    if (language !== 'en') {
      const translateTexts = async (texts) => {
        const translated = {};
        for (const key in texts) {
          const response = await axios.post('https://libretranslate.de/translate', {
            q: texts[key],
            source: 'en',
            target: language,
            format: 'text',
          });
          translated[key] = response.data.translatedText;
        }
        setTranslatedTexts(translated);
      };
      translateTexts({
        hello: 'Hello',
        welcome: 'Welcome to our website!',
        // Add more texts to translate here
      });
    } else {
      setTranslatedTexts({});
    }
  }, [language]);

  return { language, setLanguage, translatedTexts };
};

export default useLanguage;
