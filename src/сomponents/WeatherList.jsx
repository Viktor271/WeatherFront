import React, {useState} from 'react';
import WeatherItem from "./WeatherItem";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonBase } from '@mui/material';

const WeatherList = ({weathers, remove, update}) => {

    const [currentPage, setCurrentPage] = useState(1);

    if (weathers.length == 0){
        return (
            <h1 style={{textAlign: "center"}}>
                No data
            </h1>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Temp</TableCell>
                        <TableCell>Wind</TableCell>
                        <TableCell>Humidity</TableCell>
                        <TableCell>Pressure</TableCell>
                    </TableRow>
                </TableHead>
                    {/*{weathers.map((weather) =>*/}
                    {/*    <WeatherItem weather = {weather} key={weather.id}/>*/}
                    {/*)}*/}

                {weathers
                    .slice((currentPage - 1) * 10, currentPage * 10)
                    .map((weather) => <WeatherItem weather={weather} key={weather.id} />)
                }
            </Table>
            <ButtonBase
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Prev
            </ButtonBase>
            <span>{currentPage}</span>
            <ButtonBase
                disabled={currentPage === Math.ceil(weathers.length / 10)}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </ButtonBase>
        </TableContainer>
    );
};

export default WeatherList;