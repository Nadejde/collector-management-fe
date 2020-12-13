import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default class App extends Component {
  state = {
    uploading: false,
    images: [],
    collections: [],
    numbers: [],
    selectedCollection: ""
  };

  componentDidMount() {
    fetch('https://nadejde-collector-api.azurewebsites.net/api/collections')
    .then(response => response.json()) // parse JSON from request
    .then(resultData => {
      this.setState({
        collections: resultData
      });
      console.log(resultData)
    }) // set data for the number of stars
  }

  onChange = (e) => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/`+this.state.selectedCollection+`/detect-numbers`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resultData) => {
        this.setState({
          uploading: false,
          numbers: [...this.state.numbers,...resultData]
        });
      });
  };

  changeCollection = (e) => {
    this.setState({ selectedCollection: e.target.value});
  };

  removeImage = (id) => {
    this.setState({
      images: this.state.images.filter((image) => image.public_id !== id),
    });
  };

  render() {
    const { uploading, images, numbers, collections} = this.state;

   
    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.selectedCollection}
            onChange={this.changeCollection}
        >
            {
            collections.map((collection) => {
                return (<MenuItem value={collection.id}>{collection.name}</MenuItem>)
            })
            }
        </Select>
        </FormControl>
        <div className="buttons">{content()}</div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          fullWidth
          value={numbers}
        />
         <Button variant="contained" color="primary">Upload</Button>
      </div>
    );
  }
}

