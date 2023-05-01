import React, {useEffect} from 'react'
import store from "@/05-redux/redux/store";
import {hide, show} from "../redux/actionCreator/TabbarActionCreator";

import { connect} from "react-redux";

const Detail = (props) => {
    console.log(props.match)
    // console.log(JSON.parse(props.history.location.query).id)
    // console.log(props.history.location.query.id, '')

    let {show, hide, match} = props;

    useEffect(() => {
        // console.log('2023-4-12',props);
        // console.log('create');

        console.log(match.params.myid, '利用id去后端拿数据')
        // store.dispatch 通知
        /*store.dispatch({
            // type: 'jinbohide-tabbar', //不直接调用，直接用外部函数
            type: hide(),
        })*/

        hide();

        return () => {
            console.log('deatory')
            /*store.dispatch({
                type: show()
            })*/
            show();
        }
    }, [match.params.myid])



    return (
        <div>
            Detail
        </div>
    )
}

const mapDispatchToProps = {
    show,
    hide
}

export default connect(null, mapDispatchToProps)(Detail);


// connect (将来给孩子传的属性，将来给孩子传的回调函数)
// -------- 举例说明 connect的两个参数，一个属性，一个dispatch
// export default connect(null, {
//     show,
//     hide
// /*    a() {
//
//     },
//     b() {
//
//     }*/
// })(Detail);

// export default Detail;
