const TabbarReducer = (prevState = {
    show: true,
    cityName: '北京'
}, action) => {

    console.log(action, 'action')

    let newState = {...prevState}

    switch (action.type) {
        case 'jinboshow-tabbar':
            newState.show = false
            return newState
        case 'jinbohide-tabbar':
            newState.show = true
            return newState

        // default 传错了，或者传的其它的转态数据
        default:
            return prevState
    }
    return prevState
}

export default TabbarReducer

/*
*
* store.dispatch
* store.subscribe
* store.getState
*
*
* */

