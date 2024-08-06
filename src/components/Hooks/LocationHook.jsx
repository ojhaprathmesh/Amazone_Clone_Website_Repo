import { useState, useEffect } from "react";

const useCountryCode = () => {
    const [countryCode, setCountryCode] = useState("Unknown");

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                setCountryCode(data.country_code || "Unknown");
            })
            .catch(() => setCountryCode("Unknown"));
    }, []);

    return countryCode;
};

export default useCountryCode;
