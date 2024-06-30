import React, {useState} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    const addData = async (restOfUrl="") => {
        try{
            const res = await axios.get(`${baseUrl}${restOfUrl}`);
            setData(data => [...data, {...res.data, id: uuid()}]);
        }
        catch(err){
            setError(err);
            console.error("Error fetching data:", err);
        }
    }

    return [data, addData, error]
};

export default useAxios;