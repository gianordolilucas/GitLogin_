import React, { useContext } from "react";

import Container from "../components/container";
import ReposContainer from "../components/reposContainer";
import Footer from '../components/footerContainer';
import HeaderContainer from '../components/hearderContainer'


import { context } from '../context';

const Repos = props => {
    const ctx = useContext(context);

    return (
        <Container>
            <HeaderContainer userFollow={false} number={ctx.userData?.public_repos} text={'repositórios'}></HeaderContainer>
            <ReposContainer name={ctx.userData?.name} repos={ctx?.repos}/>
            <Footer/>
        </Container>
    );

}; export default Repos