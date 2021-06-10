import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css';
import '../utils/utils';
import { COLUMNS } from './columns';
import DisplayTable from './Table';


const log_api_address = process.env.BACKEND_ADDRESS || 'localhost';
const log_api_port = process.env.BACKEND_PORT || '3000';
function DisplayLogApiResult() {
      const columns = React.useMemo(() => COLUMNS, []);

  const [logData, setlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const flattenObject = (obj) => {
    const flattened = {}
   
    Object.keys(obj).forEach((key) => {
     if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
     } else {
      flattened[key] = obj[key]
     }
    })
   
    return flattened
   }



  const getlogData = async() => {
    const url = "http://"+log_api_address+":"+log_api_port+"/api/logs";
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };
    try {
      const data = await axios.get (url, config)
      // console.log(data.data.map(x => {
      //   return flattenObject(x);
      // }));
     setlogData(data.data.map(x => {
      return flattenObject(x);
    }));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const data = await axios.get (
    //     "http://localhost:3000/api/logs"
    //   )
    //   console.log(data.data.map(x => {
    //     return flattenObject(x);
    //   }));
    //  setlogData(data.data.map(x => {
    //   return flattenObject(x);
    // }));
    //   setLoading(true);
    // } catch (error) {
    //   console.log(error);
    // }

  }

  useEffect(() => {
    getlogData();
    }, []);
  
    return (
      <div className="DisplayLogApiResult">
            <DisplayTable columns={columns} data={logData} />
      </div>
    );
}

export default DisplayLogApiResult;
