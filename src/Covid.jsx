import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Covid =()=>{
    const [data, setData]= useState([]);
    
    const getCovidData = async () =>{
        const res= await fetch('https://api.covid19api.com/summary');
        const actualData= await res.json();
        console.log(actualData.Countries);
        setData(actualData.Countries);
    }
    useEffect(()=>{
     getCovidData();
    },[]);
    return(
        <>
        
        <div className="container-fluid mt-5">
              <div  className="main-heading"> 
              <h1 className="mb-5 text-center  text-white"><span className="font-weight-bold "> WORLD </span>COVID-19 TRACKER </h1>
              </div>
        <div className="table-responsive">
            <table className=" table table-hover">
                <thead className="thead-light">
                    <tr className="bg-light text-dark">
                        <th >Country</th>
                        <th>Total Confirmed</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr key={ind}> 
                                  <th className="text-info" >{curElem.Country}</th>
                                  <td className="text-warning">{curElem.TotalConfirmed}</td>
                                  <td className="text-success">{curElem.NewRecovered}</td>
                                  <td className="text-danger">{curElem.TotalDeaths}</td>
                                  <td className="text-info">{curElem.Date}</td>
                                  
                                </tr>
                           

                            )

                        })
                    }
              
                  
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}

export default Covid;