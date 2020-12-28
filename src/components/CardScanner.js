import React, { Component } from 'react';
import Spinner from './Spinner'
import Buttons from './Buttons'
import CollectionSelector from '../controls/CollectionSelector'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TramRounded } from '@material-ui/icons';


export default class App extends Component {
  state = {
    uploading: false,
    images: [],
    collections: [],
    numbers: [],
    numbersText: "",
    selectedCollection: "",
    open: false
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

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

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
        console.log([...this.state.numbers,...resultData].join(','));
        this.setState({
          uploading: false,
          numbersText: [...this.state.numbers,...resultData].join(','),
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
        numbers: this.state.numbersText.split(",")
      }),
    })
      .then((res) => {
        this.setState({
          uploading: false,
          numbersText: "",
          numbers: [],
          open: true
        });
      });
  }

  textFieldChange = (e) => {
    if (e.target) {
      e.preventDefault();
      const { target: { name, value }, } = e;
      this.setState({numbersText: value});
    }
  }

  render() {
    const { uploading, images, numbers, collections} = this.state;

    const Alert = (props) => {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
   
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
          value={this.state.numbersText}
          onChange={this.textFieldChange}
        />
        <Button variant="contained" color="primary" onClick={this.uploadNumbers}>Upload</Button>
        <br/><br/>
        <a href={"/ebaylisting/" + this.state.selectedCollection} target="_blank">print ebay listing</a>
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="success">
            Numbers added to inventory!
          </Alert>
      </Snackbar>
      </div>
    );
  }
}

