import React, {useContext } from 'react';

import Container from '../components/container';
import UserContainer from '../components/userContainer';
import UserPhoto from '../components/userPhoto';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import HeaderContainer from '../components/hearderContainer';
import Footer from '../components/footerContainer'

import {context }from '../context'

const FollowDetails = props => {
    const ctx = useContext(context);
    return (
        <Container>
            <React.Fragment>
                <UserContainer>
                    <HeaderContainer userFollow={true} ></HeaderContainer>
                    <UserPhoto alternativeText= "Imagem" url={ctx.userDataFollow?.avatar_url} ></UserPhoto>
                    <UserDetails name={ctx.userDataFollow?.name} login={ctx.userDataFollow?.login} email={ctx.userDataFollow?.email} location={ctx.userDataFollow?.location} ></UserDetails>                    
                    <UserNumbers userFollow={true} repos={ctx.userDataFollow?.public_repos} followers={ctx.userDataFollow?.followers} following={ctx.userDataFollow?.following}/>
                    <UserDetails bio={ctx.userDataFollow?.bio}></UserDetails>
                </UserContainer>
                <Footer/>
            </React.Fragment>
        </Container>
    );
} 
export default FollowDetails