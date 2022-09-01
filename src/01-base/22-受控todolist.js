import React, { Component, createRef } from "react";
import "./css/01-index.css";

export default class Demo22 extends Component {
  state = {
    list: [
      { mytext: "111", isChecked: false },
      { mytext: "222", isChecked: false },
      { mytext: "333", isChecked: true },
    ],
    mytext: "",
    checkList: [],
  };

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <input
          type="text"
          value={this.state.mytext}
          onChange={(event) => {
            this.setState({
              mytext: event.target.value,
            });
          }}
        />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => {
                    this.handleChange(index);
                  }}
                />
                {/* 富文本 */}
                <span dangerouslySetInnerHTML={{ __html: item.mytext }} style={{textDecoration: item.isChecked ? 'line-through': null}}></span>

                {/* 写法一：bind传参 */}
                {/* <button onClick={this.deleteItem.bind(this, index)}>删除</button> */}

                {/* 写法二：匿名函数，函数体内传参 */}
                <button
                  onClick={() => {
                    this.deleteItem(index);
                  }}>
                  删除
                </button>
              </li>
            );
          })}
        </ul>

        {/* 条件渲染 */}
        {/* 三目思想 */}
        {/* <div>暂办事件</div> */}

        {/* 写法一 */}
        {/* {this.state.list.length === 0 ? <div>暂办事件</div> : null} */}

        {/* 写法二 */}
        {/* {this.state.list.length === 0 && <div>暂办事件</div>} */}

        <div className={this.state.list.length === 0 ? null : "hidden"}>暂办事件</div>
      </div>
    );
  }

  handleChange = (index) => {
    console.log(index)

    let newList = [...this.state.list];
    newList[index].isChecked = !newList[index].isChecked;
    // newList.push(this.state.mytext);

    // 更新数组， 清空输入框
    this.setState({
      list: newList,
    });
  };

  // 增加的函数
  handleClick = () => {
    console.log(Boolean(""));

    // 尽量不要直接修改转态，不好做性能优化
    // this.state.list.push(this.myRef.current.value);

    // let newList = this.state.list;
    // // JS中数组是引用数据类型，依旧是对原数据进项操作。也有问题
    // newList.push(this.myRef.current.value);
    // this.setState({
    //   list: newList,
    // });

    // 正确操作
    let newList = [...this.state.list];
    newList.push({mytext: this.state.mytext});

    // 更新数组， 清空输入框
    this.setState({
      list: newList,
      mytext: "",
    });
  };

  // 删除的使用
  deleteItem = (index) => {
    console.log("删除", index);
    let newList = [...this.state.list];

    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
}

/* 
  Array.slice() 数组截取，如果不传参，相当于复制一个数组。
*/
