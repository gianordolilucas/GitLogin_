import styled from 'styled-components'


export const HeadLogout = styled.div`
    width: 400px;
    background: rgba(0,0,0, .6);
    display: flex;
    font-size: 18px;
    font-weight: 800;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
`


export const ButtonLogout = styled.button`
    width: 50px;
    height: 25px;
    border-radius: 15px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    transition: ease .3s;
    margin-left: auto;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
    
`

export const ButtonSave = styled.button`
    width: 60px;
    height: 25px;
    border-radius: 15px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: green;
    transition: ease .3s;
    margin-left: auto;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
    
`

export const ButtonBack = styled.button`
    width: 60px;
    height: 25px;
    border-radius: 15px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease .3s;
    margin-right: auto;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
    
`

export const Name = styled.p`
    margin: 0px 10px;
    padding: 15px 0;
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    
`
export const Title = styled.p`
    margin: 0px 10px;
    padding: 10px 0;
    color: #FFF;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    width: 100%;
    
`










