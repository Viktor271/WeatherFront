import React, {useState} from 'react';
import format from 'date-fns/format';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const WeatherItem = (props) => {

    return (
        <TableBody>
            <TableRow key={props.weather.id}>
                <TableCell>{props.weather.city}</TableCell>
                <TableCell>{format(new Date(props.weather.date), 'dd-MM-Y HH:ii:ss')}</TableCell>
                <TableCell>{props.weather.temperature}</TableCell>
                <TableCell>{props.weather.wind}</TableCell>
                <TableCell>{props.weather.humidity}</TableCell>
                <TableCell>{props.weather.pressure}</TableCell>
            </TableRow>
        </TableBody>
    );
};

export default WeatherItem;