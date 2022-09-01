import React, { Component } from 'react'

export default class Demo10 extends Component {

  state = {
    list: ['111', '222', '333']
  }

  render() {
    return (
      <div>
        {this.state.list.map((Obj, item) => 
          <li key={item}>{Obj}</li>
        )}
      </div>
    )
  }
}


const arr = [1, 2, 3, 4, 5]
/* 
  map((a, b, c)=>{}) a表示 当前成员，b：索引位置，c：当前数组
*/
arr.map((obj,item, array) => {
  console.log(obj, item, array)
})

/* 
  key 唯一标识
  为了列表的复用和重排，设置key值，提供性能
  理想key，item.id
  不涉及到列表的增加删除，重排，设置成索引没有问题
*/