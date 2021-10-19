import React, { useContext } from "react";

import Container from "../components/container";
import FollowersContainer from "../components/followersContainer"
import Footer from '../components/footerContainer'
import HeaderContainer from '../components/hearderContainer'



import { context } from '../context'

const Followers = props => {
    const ctx = useContext(context);

    return (
        <Container>
            <HeaderContainer userFollow={false} number={ctx.userData?.followers ? ctx.userData?.followers : ' '} text={'Seguidores'}></HeaderContainer>
            <FollowersContainer name={ctx.userData?.name} followers={ctx?.followers} />
            <Footer />
        </Container>

    );

}; export default Followers