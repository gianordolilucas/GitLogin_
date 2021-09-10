import styled from 'styled-components'

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(0,0,0, .6);
    @media (max-width: 430px){
        width(300px)
    }
`

export const Title = styled.title`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #FFF;
    width: 100%;
    text-align: center;
    height: 30px;

`
export const ListOfStarredsContainer = styled.section`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
    
`

export const Starred = styled.div`
    width: 100%;
    height: 80px;
    background: rgba (0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #555;
`

export const StarredName = styled.h2`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #FFF;
`

export const StarredDescription = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 100%
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
    -webkit-line-clamp: 2; 
`
