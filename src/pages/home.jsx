import React, {useContext } from 'react';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPhoto from '../components/userPhoto';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import HeaderContainer from '../components/hearderContainer';
import Footer from '../components/footerContainer'

import {context }from '../context'

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            {
            ctx.userData?.name ? 
            <React.Fragment>
                <UserContainer>
                    <HeaderContainer userFollow={false} ></HeaderContainer>
                    <UserPhoto alternativeText= "Imagem" url={ctx.userData?.avatar_url} ></UserPhoto>
                    <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} email={ctx.userData?.email} location={ctx.userData?.location} ></UserDetails>                    
                    <UserNumbers userFollow={false} repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following}/>
                    <UserDetails bio={ctx.userData?.bio}></UserDetails>
                </UserContainer>
                <Footer/>
            </React.Fragment>
            : <Header />
            }
            
        </Container>
    );
}