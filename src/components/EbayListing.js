import React, { Component, useEffect,  useState} from 'react';
import './EbayListing.css';
import {
  useParams
} from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

export default props => {
  const { id } = useParams();
  const [numbers, setNumbers] = useState([]);
  const nrRows = 100;

  useEffect(() => {
    fetch(`https://nadejde-collector-api.azurewebsites.net/api/collections/` + id + `/numbers`)
      .then(res => res.json())
      .then(
        (result) => {
          setNumbers(result);
          console.log(result);
        },
        (error) => {
          setNumbers([]);
        }
      )
  }, [])

  if (numbers.length === 0) {
    return <div>Loading...</div>;
  } else {
    const reminder = numbers.length % nrRows;
    const nrCols = (numbers.length - reminder) / nrRows + 1;
    console.log(nrCols);
  return(
    ReactDOMServer.renderToStaticMarkup(
    <div>
      <div>FREE SHIPPING TO THE UK!&nbsp;</div>
        <div>NEW NUMBERS BEING ADDED ALL THE TIME! The list below is updated every day!</div>
        <div><br/></div>
        <div>These stickers are intended for people looking to complete their collection. Please be DECENT when ordering. For
            example if you ask for 3 of the same shiny sticker leaving me with 0 stickers left I will have to ask you choose
            different numbers. Thank you for understanding!
        </div>
        <div><br/></div>
        <div>You can message me your list of stickers, or images of your list and I'll let you know what I have</div>
        <div>or just check the list below.</div>
        <br/>
        <div>Please choose the quantity of stickers you need from the drop down box and message me the numbers.&nbsp;</div> 
  <div class="ritz grid-container" dir="ltr">
    <table class="waffle" cellspacing="0" cellpadding="0">
        <tbody>
        <tr >
          {
            [...Array(nrCols).keys()].map((x)=>{
              return [
                <td class="s0 softmerge" dir="ltr">
                  <div class="softmerge-inner">number</div>
                </td>,
                <td class="s1" dir="ltr">count</td>
                ]
            })
            
          }
        </tr>
        {
            [...Array(nrRows).keys()].map((row)=>{
              return <tr >
                  {
                    [...Array(nrCols).keys()].map((col)=>{
                      if (col*nrRows + row >= numbers.length) 
                        return [
                          <td class={row % 2 === 1 ? "s2":"s6"} dir="ltr"></td>,
                          <td class={row % 2 === 1 ? "s3":"s7"} dir="ltr"></td>
                          ]
                      else
                        return [
                          <td class={row % 2 === 1 ? "s2":"s6"} dir="ltr">{numbers[col*nrRows + row].number}</td>,
                          <td class={row % 2 === 1 ? "s3":"s7"} dir="ltr">{numbers[col*nrRows + row].count}</td>
                          ]
                    })
                    
                  }
                </tr>
            })
            
          }
        </tbody>
    </table>
</div>
</div>) + 
`
<style type="text/css">.ritz .waffle a {
  color: inherit;
}

.ritz .waffle .s1 {
  border-bottom: 1px SOLID #000000;
  border-right: 1px SOLID #000000;
  background-color: #4dd0e1;
  text-align: left;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s3 {
  border-right: 1px SOLID #000000;
  background-color: #ffffff;
  text-align: right;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s2 {
  background-color: #ffffff;
  text-align: right;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s8 {
  background-color: #e0f7fa;
  text-align: right;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s11 {
  background-color: #e0f7fa;
  text-align: left;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s5 {
  border-right: 1px SOLID #000000;
  background-color: #ffffff;
  text-align: right;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s6 {
  background-color: #e0f7fa;
  text-align: right;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s4 {
  background-color: #ffffff;
  text-align: right;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s0 {
  border-bottom: 1px SOLID #000000;
  background-color: #4dd0e1;
  text-align: left;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s7 {
  border-right: 1px SOLID #000000;
  background-color: #e0f7fa;
  text-align: right;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s9 {
  border-right: 1px SOLID #000000;
  background-color: #e0f7fa;
  text-align: right;
  font-weight: bold;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}

.ritz .waffle .s10 {
  background-color: #ffffff;
  text-align: left;
  color: #000000;
  font-family: 'Arial';
  font-size: 10pt;
  vertical-align: bottom;
  white-space: nowrap;
  direction: ltr;
  padding: 2px 3px 2px 3px;
}</style>
`
  )
  }
}