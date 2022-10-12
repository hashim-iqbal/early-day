import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxiosOnMount = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
    try{
      let response = await axios.get(url);
      setData(response.data)
      setError(null)
      setLoading(false)
    } catch (err) {
      setError("Error getting data: debug")
      setLoading(false)
    }
  };
  
  return{ data: data, setDate: setData, error: error, loading: loading};
};



export default useAxiosOnMount;