import axios from 'axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { List, Image, InfiniteScroll } from 'antd-mobile';

export const NowPlaying = (props) => {

    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const count = useRef(0);


    // useEffect(() => {
    //     axios({
    //         url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7491349',
    //         headers: {
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"440100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         console.log(res.data.data.films)
    //
    //         setList(res.data.data.films)
    //     })
    // }, [])


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


    // 到底触发
    const loadMore = () => {
        console.log('到底了');
        count.current++;

        setHasMore(false);
        axios({
            url: `https://m.maizuo.com/gateway?cityId=440100&pageNum=${count.current}&pageSize=10&type=1&k=7491349`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"440100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // setList(res.data.data.films)
            setList([...list, ...res.data.data.films]);

            // setHasMore(true);
            setHasMore(res.data.data.films.length > 0)
        })
    }


    return (
        <div>
            <List>
                {list.map( item => (
                    <List.Item
                        onClick={()=>handleChangePage(item.filmId)}
                        key={item.filmId}
                        prefix={
                            <Image
                                src={item.poster}
                                // style={{borderRadius: 20}}
                                // fit={'cover'}
                                width={80}
                                // height={40}
                            />
                        }
                        // description={item.description}
                        description={<div>
                            {
                                item.grade?
                                    <div style={{visibility: 'hidden'}}>观众评分:{item.grade}</div>
                                    :
                                    <div style={{visibility: 'hidden'}}>观众评分:{item.grade}</div>
                            }
                            <div>主演</div>
                            <div>{item.nation}|{item.runtime}</div>
                        </div>}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
        </div>
    )
}
