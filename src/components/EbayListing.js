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