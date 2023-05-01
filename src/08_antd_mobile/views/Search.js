import React, {useEffect, useMemo, useState} from 'react';
// import axios from "axios";
import {store} from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

import {SearchBar} from "antd-mobile";

const Search = (props) => {

    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
    const [mytext, setMytext] = useState('');

    useEffect(() => {

        if(store.getState().CinemaListReducer.list.length === 0) {
            // 后台取数据
            // actionCreator 里 写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("store 缓存")
        }

        // 订阅
        let unsubscribe = store.subscribe(()=>{
            console.log('cinema中订阅', store.getState().CinemaListReducer.list);
            setCinemaList(store.getState().CinemaListReducer.list);
        })
        return ()=>{
            //    取消订阅
            unsubscribe()
        };
    }, [])


    const getCinemaList = useMemo(
        () => cinemaList.filter((item) =>
            item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
        ),[cinemaList, mytext]
    );

    return (
        <div>
            <div style={{padding: '10px'}}>
                <SearchBar
                    placeholder={'请输入内容'}
                    showCancelButton={()=> true}
                    value={mytext}
                    onChange={(value) => {
                        setMytext(value)
                    }}
                />
            </div>
            {
                getCinemaList.map((item, index) =>
                    <dl key={item.cinemaId} style={{padding: '10px'}}>
                        <dt>{item.name} </dt>
                        <dd style={{fontSize: '12px',color: 'gray'}}>{item.address}</dd>
                    </dl>
                )
            }
        </div>
    )
}

export default Search;
