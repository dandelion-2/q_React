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
    let list = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1633857',
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
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

