import styled from 'styled-components'
import Logo from '../../imgs/logo-zelda.png'

export const HeaderLogo = () => {
    return(
        <header>
            <ImgLogo src={Logo} alt="Logo do jogo Zelda" />
        </header>
    )
}

const ImgLogo = styled.img`
    max-width: 400px;
    width: 100%;
`