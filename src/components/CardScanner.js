import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CardScanner(props) {
    const { window, children } = props;

    const [starsCount, setStarsCount] = useState([])
    useEffect(() => {
    // get data from GitHub api
    fetch('https://nadejde-collector-api.azurewebsites.net/api/collections')
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
        setStarsCount(resultData)
        console.log(resultData)
        console.log(starsCount)
        }) // set data for the number of stars
    }, [])

    return (
    <div>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
        >
            {
            starsCount.map((collection) => {
                return (<MenuItem value={collection.id}>{collection.name}</MenuItem>)
            })
            }
        </Select>
        <input type="file" accept="image/*"></input>
        </FormControl>
    </div>

    )
}

export default CardScanner;