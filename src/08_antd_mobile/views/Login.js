import React from 'react'

export const Login = (props) => {
  return (
    <div>
      <h1>登录页面</h1>
      <input type="text" />
      <button
        onClick={() => {
          localStorage.setItem('token', '123')
          props.history.push('/center')
        }}
      >登录</button>
    </div>
  )
}

//猫眼网地址
/*https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=DED9F2805DE611EDA7C66B162306136609E57BD54C2342BC8E25996CAF540BB4&optimus_risk_level=71&optimus_code=10*/