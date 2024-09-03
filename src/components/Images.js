import React from 'react'

function Images({ style, link }) {
    return (
        <img className={style} src={link} />
    )
}

export default Images