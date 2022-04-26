import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import './Input.scss'

const Inputs = ({label, ...rest}) => {
    return (
        <>
            <FormGroup floating>
                <Input className="input" {...rest} />
                <Label for={label} className="label">{label}</Label>
            </FormGroup>
        </>            
    )
}

export default Inputs