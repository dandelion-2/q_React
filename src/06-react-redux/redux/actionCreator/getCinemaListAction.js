import axios from "axios";
/*
*  @@ 使用redux-thunk 返回一个函数
* */

// function getCinemaListAction() {
//
//     return (dispatch) => {
//         axios({
//             url: '',
//             method: 'get',
//             headers: {
//
//             }
//         }).then(res => {
//             // console.log(res.data.data.cinemas)
//
//             // return {
//             //     type: 'change-list',
//             //     playLoad: res.data.data.cinemas
//             // }
//             dispatch({
//                 type: 'change-list',
//                 playLoad: res.data.data.cinemas
//             })
//         })
//     }
//
//
//     // return {
//     //     type: 'chang-list',
//     //     value: [1, 2, 3]
//     // }
// }
//
// export default getCinemaListAction



/*
*  @@ 使用redux-promise 中间件，返还一个promise
*
* */
// 返回一个promise
async function getCinemaListAction() {
    var list = await axios({
        url: '',
        method: 'get',
        headers: {}
    }).then(res => {
        // console.log(res.data.data.cinemas)

        // return {
        //     type: 'change-list',
        //     playLoad: res.data.data.cinemas
        // }
        return {
            type: 'change-list',
            playLoad: res.data.data.cinemas
        }
    })

    return list
}

export default getCinemaListAction

