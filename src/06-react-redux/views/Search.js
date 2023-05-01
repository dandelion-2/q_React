import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {store} from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";


const Search = (props) => {

    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {

        if(store.getState().CinemaListReducer.list.length === 0) {
            // 后台取数据
            // actionCreator 里 写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("store 缓存")
        }



        axios({
            url: '',
            method: '',
            host: ''
        })


        return () => {

        }
    }, [])


    // const getCinemaList = useMemo(
    //     () => cinemaList.filter((item) =>
    //         item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
    //     ), [cinemaList, mytext]
    // );

    return (
        <div>search</div>
    )
}

export default Search;
