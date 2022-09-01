import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Tabber.module.css";

export const Tabbar = () => {
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
          <NavLink to={"/films"} activeClassName={style.jinboactive}>
            电影
          </NavLink>
          {/* <a href="#/films"></a> */}
        </li>
        <li>
          <NavLink to={"/cinemas"} activeClassName={style.jinboactive}>
            影院
          </NavLink>
          {/* <a href="#/cinemas">影院</a> */}
        </li>
        <li>
          <NavLink to={"/center"} activeClassName={style.jinboactive}>
            我的
          </NavLink>
          {/* <a href="#/center">我的</a> */}
        </li>
      </ul>
    </div>
  );
};