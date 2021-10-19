import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import {
    MenuContainer,
    ButtomMenu
} from './styles'


import { FiUsers, FiGithub, FiHome, FiStar } from 'react-icons/fi';
import { context } from '../../context'

const FooterContainer = props => {

    const ctx = useContext(context);

    const history = useHistory();
    const handleOnclick = route => history.push(route);


    /* Limpa o contexto do usuario selecionado e vai para a url que o botão apontar */
    async function goCleanUserDatails(url) {
        try {
            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            handleOnclick(url)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <MenuContainer>
            <ButtomMenu onClick={() => goCleanUserDatails('/')}><FiHome />Home</ButtomMenu>
            <ButtomMenu onClick={() => goCleanUserDatails('/repos')}><FiGithub />Repos</ButtomMenu>
            <ButtomMenu onClick={() => goCleanUserDatails('/starred')}><FiStar />Favoritos</ButtomMenu>
            <ButtomMenu onClick={() => goCleanUserDatails('/followers')}><FiUsers />Seguidores</ButtomMenu>
            <ButtomMenu onClick={() => goCleanUserDatails('/following')}><FiUsers />Seguindo</ButtomMenu>
        </MenuContainer>


    );
}
export default FooterContainer