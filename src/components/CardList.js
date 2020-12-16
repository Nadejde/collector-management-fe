import React, { Component } from 'react';
import CollectionSelector from '../controls/CollectionSelector';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class App extends Component {
  state = {
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

  changeCollection = (e) => {
    console.log(e.target)
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/` + e.target.value + `/numbers`)
      .then((res) => res.json())
      .then((resultData) => {
        console.log(resultData)
        this.setState({
          selectedCollection: e.target.value,
          numbers: resultData
        });
      });
  };

 

  render() {
    const {collections, selectedCollection, numbers} = this.state;

    return (
      <div>
        <CollectionSelector
          onChange={this.changeCollection}
          colections={collections}
          />

        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nr</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Text</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {numbers.map((number) => (
                <TableRow key={number.id}>
                  <TableCell component="th" scope="row">
                    {number.number}
                  </TableCell>
                  <TableCell align="right">{number.count}</TableCell>
                  <TableCell align="right">{number.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

