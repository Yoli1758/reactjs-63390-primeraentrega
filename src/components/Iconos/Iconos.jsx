import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Iconos=({icon,css})=> {
  return (
    <FontAwesomeIcon className={css}  icon={icon}/>
  )
}
