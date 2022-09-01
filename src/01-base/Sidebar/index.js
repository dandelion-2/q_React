import React from 'react'

export default function Sidebar(props) {

  let { bg, position } = props;

  let obj1 = {
    left: 0,
  }
  let obj2 = {
    right: 0,
  }

  let obj = {
    backgroundColor: bg,
    width: "200px",
    position: "fixed"
  }

  let styleObj = position === "left" ? {...obj, ...obj1} : {...obj, ...obj2}

  return (
    <div style={styleObj}>
      {/* <ul style={{backgroundColor: props.bg}}> */}
      {/* 结构 */}
      {/* <ul style={{backgroundColor: bg}}> */}
      <ul>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
    </div>
  )
}

// 默认值
Sidebar.defaultProps = {
  
}
