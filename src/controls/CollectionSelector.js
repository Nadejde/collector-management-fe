import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


export default props => 
  <FormControl>
    <InputLabel id="demo-simple-select-label">Collection</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={props.onChange}
    >
        {
        props.colections.map((collection) => {
            return (<MenuItem value={collection.id}>{collection.name}</MenuItem>)
        })
        }
    </Select>
    <FormHelperText>Choose the colletion you want to work on</FormHelperText>
  </FormControl>