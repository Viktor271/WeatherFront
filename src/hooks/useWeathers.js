import {useMemo} from "react";

export const useSortedWeathers = (weathers, sort) => {
    const sortedWeathers = useMemo(()=> {
        if (sort) {
            if(sort !== 'date'){
                return [...weathers].sort((a, b) => a[sort].localeCompare(b[sort]))
            }else{
                return [...weathers].sort((a, b) => new Date(a[sort]) - new Date(b[sort]))
            }
        } else {
            return weathers;
        }
    }, [sort, weathers])

    return sortedWeathers;
}

export const useWeathers = (weathers, sort, filter) => {
    const sortedWeathers = useSortedWeathers(weathers, sort);
    const filteredSortWeathers = useMemo(()=> {
        let filteredWeathers = sortedWeathers;
        if (filter.date) {
            filteredWeathers = filteredWeathers.filter((weather) => weather.date <= filter.date);
        }
        if (filter.city) {
            filteredWeathers = filteredWeathers.filter((weather) => weather.city === filter.city);
        }
        return filteredWeathers;
    }, [sortedWeathers, filter.date, filter.city])
    return filteredSortWeathers;
}