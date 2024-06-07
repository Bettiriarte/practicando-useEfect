import { useState, useEffect } from "react";


export const useFetch = (url) => { 

  const [data, setData] = useState(null)

  console.log("useFetch");

  const fecthData = async () => {
  const res = await fetch(url)
  const data = await res.json();
  setData(data);
}

  useEffect(() => {
    console.log("useEffect")
    fecthData();
  }, []);

  return {data};
 }