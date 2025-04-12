import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    // useEffect(()=>{
    //     fetch(`https://api.exchangerate.host/latest?base=${currency.toUpperCase()}`)
    //     .then((res)=>res.json)
    //     .then(res => setData(res[currency]))
    //     console.table(data);
        
    // },[currency])
    useEffect(() => {
        // fetch(`https://api.frankfurter.app/latest?from=${currency.toUpperCase()}`)
        fetch(`https://api.frankfurter.app/latest?from}`)
            .then(res => res.json())
            .then(res => {
                // Example: Get all rates from the base currency
                setData(res.rates);
                console.table(res.rates); // Shows all rates in table format
            })
            .catch(err => console.error("Error fetching exchange rates:", err));
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;