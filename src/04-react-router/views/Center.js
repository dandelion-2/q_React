import React from 'react'
import {withRouter} from "react-router-dom";

const Center = (props) => {
    return (
        <div>
            Center
            <div
                onClick={() => {
                    console.log(props)
                }}
            >
                电影订单
            </div>
        </div>
    )
}

export default withRouter(Center)


