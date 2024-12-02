import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
        .then((res) => res.json())
        .then((res) => {
            console.log("API Response:", res);
            setData(res[currency.toLowerCase()] || {});
        })
        .catch((err) => console.error("Error fetching data:", err));
    }, [currency]);

    console.log(data)
    return data;
    
}


export default useCurrencyInfo;
