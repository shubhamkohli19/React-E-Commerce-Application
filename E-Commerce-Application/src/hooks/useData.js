import apiClient from '../utils/api-client'
import { useState, useEffect } from 'react';

const useData = (url, customConfig, deps) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get(url, customConfig)
        .then((res) => setData(res.data))
        .catch((err) => setError(err.message));
    }, deps ? deps : []);

    return {data, error}
}

export default useData