/* 
  电影组件
*/
import React, { Component, useEffect, useMemo, useState } from "react";
import axios from "axios";

// -------------------------------------------- 自定义hooks -------------------------------------------
const useCinemaList = () => {

  const [cinemaList, setCinemaList] = useState([]);
  
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=7950393",
      method: "get",
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      // 接口数据
      // console.log(res.data.data.cinemas)
      // this.state.cinemaList = res.data.data.cinemas; // 不能直接修改状态
      setCinemaList(res.data.data.cinemas);
    });
  }, []);

  return {
    cinemaList
  }
}


// -------------------------------------------- 自定义hooks -------------------------------------------
const useFilter = (cinemaList, mytext) => {
  
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) => item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
      ),
    [cinemaList, mytext]
  );

  return {
    getCinemaList
  }
}                                       



export const Demo03_16 = () => {
  
  const [mytext, setMytext] = useState("");

  // -------------------------------------------- 自定义hooks -------------------------------------------
  const {cinemaList} = useCinemaList();
  
  // 自定义useFilter 对useMemo进行封装
  const { getCinemaList } = useFilter(cinemaList, mytext);


  return (
    <div>
      <input
        value={mytext}
        onChange={(event) => {
          setMytext(event.target.value);
        }}
      />
      {getCinemaList.map((item) => {
        return (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        );
      })}
    </div>
  );
};
