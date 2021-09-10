import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 400px;
    height: 200px;
    background: rgba(0,0,0, .6);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    
    ::placeholder { 
        color: red;
        opacity: 1;
    }

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const Span = styled.span` 
    
    color: red;
    border-radius: 2px;
    border: 0;
    margin: 0px 0px ;
    font-size: 15px;
    line-height: 15px;
    text-align: center;

`

export const LogoGit = styled.button` 
    
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background: rgb(247 209 21);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    transition: ease .3s;
    margin: 15px 15px;
`


export const HeaderSearchButton = styled.button`

    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background: rgb(247 209 21);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    transition: ease .3s;
    margin: 15px 15px;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`
