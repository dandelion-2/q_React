const CityReducer = (prevState = {
    cityName: '北京'
}, action) => {

    console.log(action, 'action')

    let newState = {...prevState}

    switch (action.type) {

        // 改变城市
        case 'change-city':
            newState.cityName = action.playLoad
            return newState

        // default 传错了，或者传的其它的转态数据
        default:
            return prevState
    }
}

export default CityReducer;