import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart } from 'react-chartkick';
import 'chartkick/chart.js'

 

function HBarChart() {
  const [records, setRecords] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);

  const generateBarGraphData = (records) => {
    const graphData = [];
    records.map((val) => {
      const tempData = [];
      tempData.push(val.country);
      tempData.push(val.quantity);
      graphData.push(tempData);
    })
    setBarGraphData(graphData);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/report/csv')
    .then(function (response) {
        setRecords(response.data);
        generateBarGraphData(response.data);
        //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      
    });
  });

  return (
    <div>
        <div>
          <h1><strong>  Work Flow Design  </strong></h1>

          <h3>  Area Chart  </h3>

          <AreaChart data={barGraphData} />

          <strong>  Table </strong>
        </div>
        <table>
            <thead>
                <tr>
                    {/* <th><center>Segment</center></th> */}
                    {/* <th><center>City</center></th> */}
                    <th><center>Country</center></th>
                    <th><center>Quantity</center></th>
                </tr>
            </thead>
            <tbody>
            {
                records.map((val, key) => {
                    return (
                        <tr key={key}>
                          {/* <td><center>{val.segment}</center></td> */}
                          {/* <td><center>{val.city}</center></td> */}
                          <td><center>{val.country}</center></td>
                          <td><center>{val.quantity}</center></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  );
}

 

export default HBarChart;