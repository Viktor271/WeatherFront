import {useState} from "react";

export const useFatching = (callback) => {
    const [isLoading, setIsWeathersLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetching = async ()=> {
        try{
            setIsWeathersLoading(true)
            await callback()
        }catch (e){
            setError(e.message)
        }finally {
            setIsWeathersLoading(false)
        }
    }
    return [fetching, isLoading, error];
}