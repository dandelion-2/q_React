import React, { useEffect, useState } from "react";
import axios from "axios";

export const Demo3_03 = () => {
  const [list, setList] = useState([]);

  // axios.get("/text2413.js.json").then((res) => {
  //   console.log(res.data);

  //   setList([...list, res.data.films]);
  // });


  useEffect(() => {
    axios.get("/test.json").then((res) => {
        console.log(res.data);
    
        setList( res.data.data.films);
      });
  }, [])

  return (
    <div>
      {list.map(item => (
        <li key={item.filmId}>{item.name}</li>
      ))}
    </div>
  );
};

/* 
  useEffect
*/
