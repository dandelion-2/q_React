import React, {useEffect, useMemo} from 'react';
import axios from "axios";

const Search = (props) => {

    useEffect(() => {

        axios({
            url: '',
            method: '',
            host: ''
        })


        return () => {

        }
    }, [])


    // const getCinemaList = useMemo(
    //     () => cinemaList.filter((item) =>
    //         item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
    //     ), [cinemaList, mytext]
    // );

    return (
        <div>search</div>
    )
}

export default Search;
