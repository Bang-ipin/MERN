import React from 'react'
import { Button } from 'reactstrap'
import './submit.scss'

const Submit = ({label, ...rest}) => {
    return (
        <>
            <Button {...rest}>{label}</Button>
        </>
    )
}

export default Submit