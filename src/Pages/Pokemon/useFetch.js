import { useEffect, useState } from "react";

export function useFetch(url){

    const [ data, setData ] = useState({})
    
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(true)

    useEffect(() => {
        setLoading(true)
            fetch(url)
            .then ((response) => response.json())
            .then ((data) => setData(data))
            .catch((error)=> setError(error))
            .finally (() => setLoading(false))
    },[url])

// console.log(data.name)

    return {data, loading, error}
}