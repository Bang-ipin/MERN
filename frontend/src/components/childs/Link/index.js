import React from 'react'
import './link.scss'

const Links = ({title,onClick}) => {
  return (
    <>
       <p onClick={onClick} className="links">{title}</p>
    </>
  )
}

export default Links