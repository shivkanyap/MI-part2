import React from 'react'
import Button from '@material-ui/core/Button'

export default  function Page(){

    const [userButton, setUserButton] = React.useState('Login')
    const handleClick=()=>{
        console.log("u clicked me ")
        if (userButton === "Login") {
          setUserButton("Logout")
            } else {
               setUserButton("Login")
            }
    }

    return(
        <div>
            <h6>Click here to login</h6>
            <Button color="inherit" onClick={()=> handleClick()}>{userButton}</Button>

        </div>
    )
}