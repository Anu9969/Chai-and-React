import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({});
     //direct fetch se bhi api call kr skte the but yha humne 
        //useEffect ka use krke data fetch kiya hai
      useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) //sting response ko json m change krdia
            .then((res)=> {
                setData(res[currency])
            })
    }, [currency]) 
    console.log(data)
    return data;    
    }

    export default useCurrencyInfo;