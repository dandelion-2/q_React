import React, {useEffect} from 'react'
import axios from "axios";

export const Comingsoon = () => {

    useEffect(() => {
        axios
            .get('/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=DED9F2805DE611EDA7C66B162306136609E57BD54C2342BC8E25996CAF540BB4&optimus_risk_level=71&optimus_code=10')
            .then(res => {
                console.log(res)
            //    ! 报一个跨域的错误，解决办法，反向代理，原理是：服务器与服务器之间没有跨域
            })
    }, [])

    return (<div>Comingsoon</div>)
}
