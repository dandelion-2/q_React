import React, {useEffect} from 'react'
import store from "@/05-redux/redux/store";
import {hide, show} from "../redux/actionCreator/TabbarActionCreator";

export const Detail = (props) => {
    console.log(props.match)
    // console.log(JSON.parse(props.history.location.query).id)
    // console.log(props.history.location.query.id, '')

    useEffect(() => {
        console.log('create')

        // store.dispatch 通知
        store.dispatch({
            // type: 'jinbohide-tabbar', //不直接调用，直接用外部函数
            type: hide(),
        })

        return () => {
            console.log('deatory')
            store.dispatch({
                type: show()
            })
        }
    }, [])



    return (
        <div>
            Detail
        </div>
    )
}
