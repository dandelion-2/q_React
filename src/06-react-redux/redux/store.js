/*
*   1.引入redux
*   2.createStore ( reducer )
* */

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";

// ---- redux-persist  redux持久化----

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ！！！ 中间件 ！！！
import reduxThunk from 'redux-thunk';


// 中间件 redux-Promise
import reduxPromise from 'redux-promise';


/* 合并reducer */


/*
*   redux中间件
*       在action仅仅是携带了数据的普通js对象，action create返回的值是这个action类型的对象。然后store.dispatch（）进行分发，
*       。同步情况下一切很完美，但是reducer无法处理异步的情况。
* */

/*
* combineReducers hook合并reducer钩子函数
* */


// const reducer = combineReducers({
//     CityReducer,
//     TabbarReducer,
//     CinemaListReducer
// })

const persistConfig = {
    key: 'root',
    storage,
    // 持久化-黑名单
    blacklist: [''],
    // 持久化-白名单
    whitelist: ['CityReducer']
}

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);


// ！！！ redux 工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));

let persistor = persistStore(store);


export {store, persistor};

// applyMiddleware 应用中间件，来自redux
// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))


// export default store;


/*const reducer = (prevState = {
        show: true,
        cityName: '北京'
    }, action) => {

    console.log(action, 'action')

    let newState = {...prevState}

    switch (action.type) {
        case 'jinboshow-tabbar':
            newState.show = true
            return newState
        case 'jinbohide-tabbar':
            newState.show = false
            return newState

        // 改变城市
        case 'change-city':
            newState.cityName = action.playLoad
            return newState

        // default 传错了，或者传的其它的转态数据
        default:
            return prevState
    }
    return prevState
}

const store = createStore(reducer)
// const store = createJinBostore(reducer)


/!*
*
* store.dispatch
* store.subscribe
* store.getState
*
*
* *!/

function createJinBostore(reducer) {

    let list = []
    let state = reducer(undefined, {})

    function subscribe(callback) {
        list.push(callback)
    }



    function dispatch(action) {
        state = reducer(state, action)
        for (let i in list) {
            list[i] && list[i]()
        }
    }

    function getState() {
        return state
    }

    return {
        subscribe,
        getState,
        dispatch
    }
}

export default store;*/

/*
    var obj = {
        myName: "Jinbo"
    }

    function test() {
        obj.myName = 'xiaoming'
        return obj
    }

    test()

    纯函数：
        1、对外界没有副作用
        2、同样的输入得到同样的输出

 */

