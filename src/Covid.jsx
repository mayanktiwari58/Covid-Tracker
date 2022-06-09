import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Covid =()=>{
    const [data, setData]= useState([]);
    
    const getCovidData = async () =>{
        const res= await fetch('https://data.covid19india.org/data.json');
        const actualData= await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(()=>{
     getCovidData();
    },[]);
    return(
        <>
        
        <div className="container-fluid mt-5">
              <div  className="main-heading"> 
              <h1 className="mb-5 text-center  text-white"><span className="font-weight-bold "> INDIA </span>COVID-19 TRACKER </h1>
              </div>
        <div className="table-responsive">
            <table className=" table table-hover">
                <thead className="thead-light">
                    <tr className="bg-light text-dark">
                        <th>State</th>
                        <th> Confirmed</th>
                        <th> recovered</th>
                        <th> deaths</th>
                        <th> active</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr key={ind}> 
                                  <th className="text-info" >{curElem.state}</th>
                                  <td className="text-warning">{curElem.confirmed}</td>
                                  <td className="text-success">{curElem.recovered}</td>
                                  <td className="text-danger">{curElem.deaths}</td>
                                  <td className="text-info">{curElem.active}</td>
                                  <td className="text-info">{curElem.lastupdatedtime}</td>
                                  
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
