import React, { Component } from "react";

import PropTypes from 'prop-types';
console.log(PropTypes)

export default class Navbar extends Component {

  // 变量类型
  static propTypes = {
    title: PropTypes.string,
    leftshow: PropTypes.bool
  }

  // 变量默认值
  static defaultProps = {
    leftshow: true
  }

  render() {
    let { title, leftshow } = this.props;
    return (
      <div>
        {leftshow && <div>navbar-{title}</div>}
      </div>
    );
  }
}

/* // 类属性
Navbar.propTypes = {
  // title: 验证是不是字符串的方法
  title: PropTypes.string,
  // leftshow: 验证是不是bool的方法
  leftshow: PropTypes.bool
}

// 设置不传时的默认值
Navbar.defaultProps = {
  leftshow: true
} */