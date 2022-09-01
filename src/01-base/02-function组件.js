import React from "react";

export default function Demo2() {
  return (
    <div>
      02-function组件
      <Son></Son>
    </div>
  );
}


/* 
  16.8 之前是没有状态的
  17版本后拥有转态，使用hooks
*/
function Son() {
  return (
    <div>
      hello mySon
    </div>
  )
}
