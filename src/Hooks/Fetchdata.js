import { useState } from "react";


export default function useFeatch(){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async({url, method = "GET", body = null })=>{
        setLoading(true);
        try {
            const res = await fetch(url,{
                method
            })
            const result = await res.json()

            if(result.success){
                setData(result);
            }else{
                setError(result.message)
            }
            setLoading(false)

        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    return{
        data, 
        loading,
        error,
        fetchData
    }
}
