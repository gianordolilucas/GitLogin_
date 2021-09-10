import styled from 'styled-components'


export const MenuContainer = styled.div`
    width: 400px;
    background: #FFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`


export const ButtomMenu = styled.div`
    width: 100px;
    heigth: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.03);
        transition: .4s ease;
        border-radius: 10px;
    }
    
`