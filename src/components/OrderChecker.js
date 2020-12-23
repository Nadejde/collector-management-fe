import React, { useEffect,  useState } from 'react';
import Spinner from './Spinner'
import Buttons from './Buttons'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  useParams
} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CollectionSelector from '../controls/CollectionSelector';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default props => {
  const { id } = useParams();
  const [numbers, setNumbers] = useState([]);
  const [numbersText, setNumbersText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [checkResult, setCheckResult] = useState({});
  const [orderNumbers, setOrderNumbers] = useState("");
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSlectedCollection] = useState("");
  const [open, setOpen] = React.useState(false);


  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/`)
      .then(res => res.json())
      .then(
        (result) => {
          setCollections(result);
        },
        (error) => {
          setCollections([]);
        }
      )
  }, [])

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/` + selectedCollection + `/numbers/detect`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resultData) => {
        setNumbersText([...numbers,...resultData].join(','));
        setNumbers([...numbers,...resultData]);
        setUploading(false);
      });
  };

  const checkNumbers = (e) => {
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/` + selectedCollection + `/numbers/check`, {
      method: "POST",
      body: JSON.stringify({
        numbers: numbersText
      }),
    })
      .then(res => res.json())
      .then((res) => {
        setCheckResult(res);
        if(res.found.length > 0 ) {
          setOrderNumbers(res.found.reduce((flat, val) => {
            flat.push(val.number);
            return flat;
          },[]));
          console.log(orderNumbers);
        }
      });
  }

  const removeNumbers = (e) => {
    console.log(orderNumbers);
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/` + selectedCollection + `/numbers`, {
      method: "POST",
      body: JSON.stringify({
        remove_numbers: orderNumbers
      }),
    })
      .then((res) => {
        setOpen(true);
      });
  }

  const textFieldChange = (e) => {
    if (e.target) {
      e.preventDefault();
      const { target: { name, value }, } = e;
      console.log('name ', name);
      setNumbersText(value);
    }
  }

  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />;
      default:
        return <Buttons onChange={onChange} />;
    }
  };

  const changeCollection = (e) => {
    console.log(e.target.value);
    setSlectedCollection(e.target.value);
  };

  const buildList = (numbers, text) => {
    if(numbers)
      return(
        <div>
          <div>{text}</div>
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
        </div>);
    else return("");
  }
  
  return(
    <div>
      <CollectionSelector
        onChange={changeCollection}
        colections={collections}
        />
      <br/><br/>
      <div>This is the new number checker tool. Using this tool you can upload images of your missing numbers lists, or photos of your empty album pages, or just add the numbers in the text box if you have them in a digital format.</div><br/>
      <div>This tool is still very new and in testing so please give me feedback if you think I can improve anything with your order. Thank you!</div><br/>
      <div>Follow these instructions please:</div><br/>
      <div><b>1. If you have photos with numbers on them, either a written list or pages from your album press the choose files button. You can select multiple files at once and use the button as many times as you need.</b>
      If you have the numbers in a digital format on your device skip to step 2.</div>
      <div className="buttons">{content()}</div><br/><br/>
      <div><b>2. The list below will be populated with the numbers detected in the photos. Or you can just add you numbers in here. You can use multiple lines and separate the numbers with spaces or commas.</b></div>
      <TextField
        id="standard-multiline-flexible"
        label="Numbers to check"
        multiline
        fullWidth
        value={numbersText}
        onChange={textFieldChange}
      />
      <Button variant="contained" color="primary" onClick={checkNumbers}>Check Numbers</Button><br/><br/>
      <div><b>3. After pressing check numbers the list below will have the numbers available to order. Please send this list with your order.</b></div>
      <TextField
        id="standard-multiline-order-numbers"
        label="Numbers available to order"
        multiline
        fullWidth
        value={orderNumbers}
      />
      <Button variant="contained" color="primary" onClick={removeNumbers}>Remove Numbers from inventory</Button><br/><br/>
      <br/><br/>
      <div>{buildList(checkResult.found, "Available card list:")}</div>
      <div>{buildList(checkResult.missing, "Missing card list:")}</div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Numbers removed from inventory!
        </Alert>
      </Snackbar>
    </div>
  )
}
