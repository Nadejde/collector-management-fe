import React, { Component, useEffect,  useState} from 'react';
import './EbayListing.css';
import {
  useParams
} from "react-router-dom";

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
    <div>
      <div>FREE SHIPPING TO THE UK!&nbsp;</div>
      <div><br/></div>
        <div>NEW NUMBERS BEING ADDED ALL THE TIME! The list below is updated every day!</div>
        <div><br/></div>
        <div>These stickers are intended for people looking to complete their collection. Please be DECENT when ordering. For
            example if you ask for 3 of the same shiny sticker leaving me with 0 stickers left I will have to ask you choose
            different numbers. Thank you for understanding!
        </div>
        <div><br/></div>
        <div>Please choose the number of stickers you need from the drop down box and message me the numbers.&nbsp;</div> 
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
</div>
  )
  }
}