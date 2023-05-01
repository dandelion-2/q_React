import axios from 'axios'
import React, {useEffect} from 'react'
import {useState} from 'react'
import {NavLink, useHistory, withRouter} from 'react-router-dom'

export const NowPlaying = (props) => {

    const [list, setList] = useState([])


    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7491349',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"440100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)

            setList(res.data.data.films)
        })
    }, [])


    const history = useHistory()

    const handleChangePage = (id) => {
        console.log('click')

        /* 三种跳转 1 */
        // ----------------- 1 ----------------
        // window.location.href = '#/detail' + id

        console.log(props)

        //------------------ 2 -----------------
        // props.history.push(`/detail/${id}`)


        // ----------------- 3 -----------------
        // hooks封装了跳转的钩子
        history.push(`/detail/${id}`)

        // 2 - query传参
        // history.push({ pathname: '/detail', query: JSON.stringify({id: id}) })

        // 3- state 传参
        // history.push({pathname: '/detail'})
    }

    return (
        <div>
            {list.map(item => (

                // 方法一
                // <FilmItem key={item.filmId} {...item} {...props}></FilmItem>

                // 方法二
                // 不传props,使用withRouter钩子函数
                <WithFilmItem key={item.filmId} {...item} ></WithFilmItem>

                /*<li key={item.filmId}
                    onClick={() => handleChangePage(item.filmId)}
                >
                    {/!* <NavLink to={`/detail/${item.filmId}`}>{ item.name }</NavLink> *!/}
                    <NavLink to={"/detail/" + item.filmId}>{item.name}</NavLink>
                </li>*/
            ))}
        </div>
    )
}


function FilmItem(props) {
    const handleChangePage = () => {

    }
    let {name, filmId, poster} = props

    return (
        <li
            onClick={() => {
                // console.log(filmId)
                console.log(props)
                props.history.push(`/detail/${filmId}`)
            }}
        >
            {name}
        </li>
    )
}

/*
*  把组件在包装一层父组件，提供history值
* withRouter 就是一个高阶组件
* */


const WithFilmItem = withRouter(FilmItem)
