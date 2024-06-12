import { TextField } from '@mui/material'
import React from 'react'

const Input = ({onChange,type='text',variant,value,placeholder,...rest}) => {
  return (

<TextField onChange={onChange} type={type} variant={variant} placeholder={placeholder} value={value} {...rest} />
  )
}

export default Input