import { Button as MuiButton } from "@mui/material"



const Button = ({children,type='text',variant,onClick,...rest}) => {
  return (
    <MuiButton  type={type} variant={variant} onClick={onClick} {...rest} >{children}</MuiButton>
  )
}

export default Button