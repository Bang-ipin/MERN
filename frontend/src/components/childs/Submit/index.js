import React from 'react'
import { Button } from '@mui/material'

import './submit.scss'

const Submit = ({label, ...rest}) => {
    return (
        <>
            <Button {...rest}>{label}</Button>
        </>
    )
}

export default Submit