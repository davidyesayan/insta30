import { useState } from "react"

export const withPassword = (Component) => {
    return (props) => {
        const [visible, setVisible] = useState(true)

        const toggleShowPassword = () => {
            setVisible(!visible)
        }


        return <Component {...props} {...{visible,toggleShowPassword}}/> 
    }
}