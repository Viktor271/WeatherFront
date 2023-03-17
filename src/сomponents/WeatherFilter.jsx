import React from 'react';
import MySelect from "./UI/select/MySelect";
import {InputLabel, NativeSelect, Input} from "@mui/material";

const WeatherFilter = ({filter, setFilter}) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "25px", marginBottom: "5px"}}>
            <InputLabel variant="standard" color="success" >Sort:</InputLabel>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="select"
                options={[
                    {value: 'city', name: "by city"},
                    {value: 'date', name: "by date"},
                    {value: 'pressure', name: "by pressure"},
                    {value: 'temperature', name: "by temperature"},
                    {value: 'wind', name: "by wind"},
                    {value: 'humidity', name: "by humidity"},
                ]}
            ></MySelect>
            <InputLabel>Filter by Date:</InputLabel>
            <Input type="date" onChange={(e) => setFilter({ ...filter, date: e.target.value })} />
            <InputLabel>Filter by city:</InputLabel>
            <NativeSelect onChange={(e) => setFilter({ ...filter, city: e.target.value })}>
                <option value="">All</option>
                <option value="Moscow">Moscow</option>
                <option value="Ashdod">Ashdod</option>
                <option value="Beijing">Beijing</option>
            </NativeSelect>
        </div>
    );
};

export default WeatherFilter;