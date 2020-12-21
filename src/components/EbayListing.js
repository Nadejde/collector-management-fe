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
                  <div class="softmerge-inner" >sticker no</div>
                </td>,
                <td class="s1" dir="ltr">count</td>
                ]
            })
            
          }
        </tr>
        {
            [...Array(nrRows).keys()].map((x)=>{
              return <tr >
                  {
                    [...Array(nrCols).keys()].map((x)=>{
                      return [
                        <td class="s2" dir="ltr">1</td>,
                        <td class="s3" dir="ltr">14</td>
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