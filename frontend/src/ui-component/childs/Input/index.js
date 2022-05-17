import { TextField } from '@mui/material'
import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import './Input.scss'

const Inputs = ({label, ...rest}) => {
    return (
        <>
            <FormGroup floating>
                <TextField className="input" {...rest} />
                <Label for={label} className="label">{label}</Label>
            </FormGroup>
        </>            
    )
}

export default Inputs