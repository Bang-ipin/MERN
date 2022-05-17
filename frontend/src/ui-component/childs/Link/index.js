import React from 'react'
import './link.scss'

const Links = ({title,props,onClick}) => {
  return (
    <>
       <p onClick={onClick} {...props} className="links">{title}</p>
    </>
  )
}

export default Links