import styled from "styled-components";

export const DivBtns = styled.div `
    margin-top: 50px;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
`

export const BtnPage = styled.button`
    background-color: #c2bd85;
    color: #edecec;
    &:hover{
        box-shadow: 0 0 15px 5px #686868;
    }
    &:active{
        transform: scale(1.1);
    }
    &:disabled{
        box-shadow: none;
        transform: scale(1);
        cursor: no-drop;
        opacity: 0.5;
    }
`