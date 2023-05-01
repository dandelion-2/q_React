import React, {useEffect} from 'react'

export const Detail = (props) => {
    console.log(props.match)
    // console.log(JSON.parse(props.history.location.query).id)
    // console.log(props.history.location.query.id, '')

    useEffect(() => {
        console.log('create')
        return () => {
            console.log('deatory')
        }
    }, [])



    return (
        <div>
            Detail
        </div>
    )
}
