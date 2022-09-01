import React, {useEffect, useState} from 'react'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";
import store from "../redux/store";

export const Cinemas = (props) => {

    const [cityName] = useState(store.getState().CityReducer.cityName)
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            //    去后端去数据
            store.dispatch(getCinemaListAction())
        } else {
            console.log('store 缓存')
        }

        // 订阅
        store.subscribe(() => {
            setCinemaList(store.getState().CinemaListReducer.list);
        })

        // const unsubscribe = store.subscribe(() => {
        //     console.log('cinema 订阅中', store.getState().CinemaListReducer.list)
        //
        //     setCinemaList(store.getState().CinemaListReducer.list)
        // })

        // return () => {
        // //    取消订阅
        //     unsubscribe()
        // }

    }, [])


    return (
        <div>
            <div style={{overflow: 'hidden'}}>
                <div
                    onClick={() => {
                        props.history.push(`/city`)
                    }}
                >{cityName}
                </div>
                <div style={{float: 'right'}}>搜索</div>
            </div>
            {/*{console.log(cinemaList)}*/}
            {cinemaList.map(item =>
                <dl key={item} style={{padding: '10px'}}>
                    <dt>{item.name}</dt>
                    <dd style={{fontSize: "12px", color: 'gray'}}>{item.address}</dd>
                </dl>
            )}
        </div>
    )
}




