import React from 'react'
import { FinestraIcon } from '../utils/icons'

const AppLogo = ({ className, size = 25 }) => {
  return (
    <FinestraIcon size={size} className={`${className}`}/>
  )
}

export default AppLogo