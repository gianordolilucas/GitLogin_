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
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;

`
export const ListOfFollowers = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Follower = styled.div`
    width: 100%;
    height: 73px;
    background: rgba (0,0,0,.05);
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid #555;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.03);
        transition: .4s ease;
        border-radius: 10px;
    }
`

export const FollowerPhoto = styled.img`
    width: 50px;
    heigth: 50px;
    border-radius: 50%;
    border: 0.5px solid #FFF
    
`

export const FollowerName = styled.p`
    font-size: 15px;
    font-weight: 800;
    color: #FFF;
    width: 100%
    overflow: hidden;
    aling: center;
    line-height: 1.3;
    margin: 20px 30px;
        
`
export const FollowingDetails = styled.p`
    color: #FFF;
    font-size: 18px;
    font-weight: 800;
    align-items: right;
    margin: 17px 30px;
    text-aling: right;
    margin-left: auto;    
`
