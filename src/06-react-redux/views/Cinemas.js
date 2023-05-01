import React, {useEffect} from 'react';
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

import {connect} from "react-redux";


const Cinemas = (props) => {

    let {list, getCinemaListAction} = props;

    // const [cityName] = useState(store.getState().CityReducer.cityName)
    // const [cinemaList, setCinemaList] = useState(store.getState().CityReducer.list)

    useEffect(() => {
        // if (store.getState().CinemaListReducer.list.length === 0) {
        if (list.length === 0) {

            //    去后端去数据
            // store.dispatch(getCinemaListAction())

            getCinemaListAction();

        } else {
            console.log('store 缓存')
        }

        // 订阅
        /*const unsubscribe = store.subscribe(() => {
            console.log('cinema 订阅中', store.getState().CinemaListReducer.list)

            setCinemaList(store.getState().CinemaListReducer.list)
        })

        return () => {
        //    取消订阅
            unsubscribe()
        }*/

    }, [list, getCinemaListAction]);

    console.log(list, 'list');

    return (
        <div>
            <div style={{overflow: 'hidden'}}>
                <div
                    onClick={() => {
                        props.history.push(`/city`)
                    }}
                >{props.cityName}
                </div>
                <div style={{float: 'right'}}>搜索</div>
            </div>
            {/*{console.log(cinemaList)}*/}

            {/*{cinemaList.map(item =>*/}
            {/*{console.log(list)}*/}
            {/*{list.map(item =>*/}
            {/*    <dl key={item} style={{padding: '10px'}}>*/}
            {/*        <dt>{item.name}</dt>*/}
            {/*        <dd style={{fontSize: "12px", color: 'gray'}}>{item.address}</dd>*/}
            {/*    </dl>*/}
            {/*)}*/}
        </div>
    )
}

/*
*  ！！！ 对Cinema 组件 进行异步改造 ！！！
* */

const mapStateToProps = (state) => {
    // 使用 属性 回调出去，就不用自己定义 状态了  11 - 12行就可以删除了
    return {
        list: state.CinemaListReducer.list,
        cityName: state.CityReducer.cityName
    }
}

const mapDispatchToProps = {
    // getCinemaListAction: getCinemaListAction, 省略写法如下行
    getCinemaListAction,
}


export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);

