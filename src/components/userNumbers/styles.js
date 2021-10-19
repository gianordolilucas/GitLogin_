import styled from "styled-components";


export const Container = styled.div`
    background: #222;
    width: 100%;
    heigth: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const NumberContainer = styled.div`
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
export const NumberContainerFollow = styled.div`
    width: 100px;
    heigth: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const NumberValue = styled.h1`
    font-size:30px;
    text-align: center;
    color: #FFF

`
export const NumberDatails = styled.h2`
    font-size:12px;
    text-align: center;
    color: #777;
    margin: 4px 0;
`

