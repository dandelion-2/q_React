import React, {useState} from 'react';
import store from "../redux/store";

import {connect} from "react-redux";

const City = (props) => {

    const [list] = useState(['北京', '上海', '深圳', '广州'])

    return (
        <div>
            city
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {

                            props.change(item)


                            /*store.dispatch({
                                type: 'change-city',
                                playLoad: item
                            })*/

                            props.history.push(`/cinemas`)
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )

};

const mapDispatchToProps = {
    change(item) {
        return {
            type: 'change-city',
            playLoad: item
        }
    }
}

export default  connect(null, mapDispatchToProps)(City);