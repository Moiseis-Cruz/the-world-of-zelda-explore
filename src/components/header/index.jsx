import React from "react"
import Logo from '../../imgs/logo-zelda.png'

export const HeaderLogo = () => {
    return(
        <header>
            <img src={Logo} alt="" style={{maxWidth: "400px", width: "100%"}} />
        </header>
    )
}