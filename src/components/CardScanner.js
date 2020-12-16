import React, { Component } from 'react';
import Spinner from './Spinner'
import Buttons from './Buttons'
import CollectionSelector from '../controls/CollectionSelector'
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

    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/`+this.state.selectedCollection+`/numbers/detect`, {
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

  uploadNumbers = (e) => {
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/`+this.state.selectedCollection+`/numbers`, {
      method: "POST",
      body: JSON.stringify({
        numbers: this.state.numbers
      }),
    })
      .then((res) => {
        this.setState({
          uploading: false,
          numbers: []
        });
      });
  }

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
        <CollectionSelector
          onChange={this.changeCollection}
          value={this.state.selectedCollection}
          colections={this.state.collections}
          />
        <div className="buttons">{content()}</div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          fullWidth
          value={numbers}
        />
         <Button variant="contained" color="primary" onClick={this.uploadNumbers}>Upload</Button>
      </div>
    );
  }
}

