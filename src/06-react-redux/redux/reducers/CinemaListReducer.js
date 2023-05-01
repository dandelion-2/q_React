const CinemaListReducer = (prevState = {
    list: []
}, action) => {

    console.log(action, 'action')

    let newState = {...prevState}

    switch (action.type) {

        // 改变
        case 'change-list':
            newState.list = action.playLoad
            return newState

        // default 传错了，或者传的其它的转态数据
        default:
            return prevState
    }
}

export default CinemaListReducer;