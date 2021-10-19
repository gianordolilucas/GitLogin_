import React, { useContext } from "react";

import Container from "../components/container";
import FollowingContainer from "../components/followingContainer"
import Footer from '../components/footerContainer'
import HeaderContainer from '../components/hearderContainer'


import { context } from '../context'

const Following = props => {
    const ctx = useContext(context);

    return (
        <Container>
            <HeaderContainer userFollow={false} number={ctx.userData?.following ? ctx.userData?.following : ' '} text={'Seguindo'}></HeaderContainer>
            <FollowingContainer name={ctx.userData?.name} following={ctx?.followings} />
            <Footer />
        </Container>
    );

}; export default Following