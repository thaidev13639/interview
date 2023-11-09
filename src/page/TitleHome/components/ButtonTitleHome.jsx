import React from 'react'

export default function ButtonTitleHome(props) {
    return (
        <button type="button" className={`btn btn-outline-${props.color}`}>{props.color}</button>
    )
}
