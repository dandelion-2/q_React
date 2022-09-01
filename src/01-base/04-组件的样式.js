import React, { Component } from 'react';
import './css/01-index.css'

class Demo4 extends Component {
  render() {
    const myname = 'jinbo'
    const obj = {
      width: "200px",
      height: "200px",
      background: 'coral',
      fontSize: "30px"
    }
    return (
      <div>
        {10 + 20}
        {myname}
        <div style={obj}></div>
        <div className='active'></div>

        <label htmlFor="username">用户名</label>
        <input id='username' type="text" />

        <div style={{ width: "80vw", margin: "0 auto", padding: "10px" }}></div>
      </div>
    );
  }
}

export default Demo4;