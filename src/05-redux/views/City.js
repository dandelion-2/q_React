import React, {useState} from 'react';
import store from "../redux/store";

const City = (props) => {

    const [list] = useState(['北京', '上海', '深圳', '广州'])

    return (
        <div>
            city
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {
                            store.dispatch({
                                type: 'change-city',
                                playLoad: item
                            })

                            props.history.push(`/cinemas`)
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )

};

export default  City;