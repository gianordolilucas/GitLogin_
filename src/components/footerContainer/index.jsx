import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import {
    MenuContainer,
    ButtomMenu
} from './styles'


import { FiUsers,FiGithub, FiHome } from 'react-icons/fi';
import {context} from '../../context'

const FooterContainer = props => {

    const ctx = useContext(context);

    const history = useHistory();
    const handleOnclick = route => history.push(route);

    async function goHome(){
            
        try{

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            handleOnclick('/')
           
        } catch(err){
            console.log(err)
        }
    }

    async function goRepos(){
            
        try{

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            handleOnclick('/repos')
           
        } catch(err){
            console.log(err)
        }
    }

    async function goFollowers(){
            
        try{

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            handleOnclick('/followers')
           
        } catch(err){
            console.log(err)
        }
    }

    async function goFollowing(){
            
        try{

            ctx.setUserDataFollow();
            ctx.setReposFollow();
            ctx.setFollowersFollow();
            ctx.setFollowingsFollow();
            handleOnclick('/following')
           
        } catch(err){
            console.log(err)
        }
    }

    

    

    

    return (
        <MenuContainer>
            <ButtomMenu onClick={() => goHome()}><FiHome/>Home</ButtomMenu>
            <ButtomMenu onClick={() => goRepos()}><FiGithub/>Repos</ButtomMenu>
            <ButtomMenu onClick={() => goFollowers()}><FiUsers/>Seguidores</ButtomMenu>
            <ButtomMenu onClick={() => goFollowing()}><FiUsers/>Seguindo</ButtomMenu>
        </MenuContainer>
        

    );
}
export default FooterContainer