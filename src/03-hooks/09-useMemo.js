/* 
  电影组件
*/
import React, { Component, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const Demo03_09 = () => {
  const [cinemaList, setCinemaList] = useState([]);
  const [mytext, setMytext] = useState("");

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

  const getCinemaList = useMemo(
    () => cinemaList.filter((item) =>
      item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList, mytext]
  );

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