import {useEffect, useMemo, useState} from "react";
import WeatherList from "./сomponents/WeatherList";
import './styles/App.css'
import WeatherFilter from "./сomponents/WeatherFilter";
import {useWeathers} from "./hooks/useWeathers";
import WeatherService from "./API/WeatherService";
import Loader from "./сomponents/UI/loader/Loader";
import {useFatching} from "./hooks/useFatching";
import moment from "moment";

function App() {

    const [weathers, setWeathers] = useState([]);
    const [filter, setFilter] = useState({ date: '', city: '', sort: '' });
    const filteredSortWeathers = useWeathers(weathers, filter.sort, filter);
    const [fetchWeathers, isWeathersLoading, weatherError] = useFatching(async () => {
        const weathers = await WeatherService.getAll();
        setWeathers(weathers)
    });


    useEffect(()=>{
        fetchWeathers()
    },[])

    return (
        <div className="App">
            <h1 style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>Weather list</h1>

            <WeatherFilter
                filter={filter}
                setFilter={setFilter}
            ></WeatherFilter>

            {weatherError &&
                <h3>Error: ${weatherError}</h3>
            }
            {isWeathersLoading
                ? <div style={{display:"flex", justifyContent:"center", marginTop:"60px"}}><Loader/></div>
                : <WeatherList weathers={filteredSortWeathers}/>
            }
        </div>
    );


}

export default App;
