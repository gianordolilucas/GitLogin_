import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const Name = styled.h1`
    margin-left: 40px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #FFF

    
    

`

export const UserName = styled.h2`
    width: 100%;
    text-align: left;
    margin-left: 40px;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 500;
    color: #888


`

export const Description = styled.p`
    width: 90%;
    text-align: left;
    margin-left: 40px;
    margin-top: 5px;
    font-size: 12px;
    color: #888;
    overflow: hidden;

    @media (max-width: 250px){
        width(300px)
    }
`