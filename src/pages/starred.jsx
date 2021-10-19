import React, { useContext } from "react";

import Container from "../components/container";
import StarredContainer from "../components/starredContainer";
import Footer from '../components/footerContainer';
import HeaderContainer from '../components/hearderContainer'


import { context } from '../context';

const Starred = props => {
    const ctx = useContext(context);

    return (
        <Container>
            <HeaderContainer userFollow={false} number={' '} text={'Favoritos'}></HeaderContainer>
            <StarredContainer name={ctx.userData?.name} starreds={ctx?.starreds} />
            <Footer />
        </Container>
    );

}; export default Starred