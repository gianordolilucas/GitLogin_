import React, {useState, useContext } from 'react';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
    Span,
    LogoGit
} from './styles';

import {context} from '../../context'
import client from '../../services/client';

const Header = () =>  {

    const ctx = useContext(context);
    const[searchedValue, setSearchedValue] = useState('');
    const [errors, setErrors] = useState('');    


    
    async function getUserData(){

        if(searchedValue === '' || searchedValue === undefined){
            setErrors({userEmpyt:"Campo obrigatório"})
            console.log("error pq ta vazio")
            return
        }else{
            setErrors({});
        }
        
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const followers = await client.get(`/${searchedValue}/followers`);
            const followings = await client.get(`${searchedValue}/following`)

            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
            ctx.setFollowers(followers.data)
            ctx.setFollowings(followings.data)

        } catch(err){
            setErrors({userNotFound:"Usuário não encontrado"})
        }
    }

    return (
        <React.Fragment>
                <HeaderSection>
                <HeaderTitle>Github Profile</HeaderTitle>
                <HeaderInputContainer>
                    <LogoGit>
                        <FiGithub size={30}/>
                    </LogoGit>
                    
                    {errors.userEmpyt ? <Span className='error'>{errors.userEmpyt}</Span> :
                    errors.userNotFound ? <Span>{errors.userNotFound}</Span>
                        :
                    undefined}
                    <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
                    
                    <HeaderSearchButton onClick={getUserData}>
                        ENTRAR <FiArrowRight/>
                    </HeaderSearchButton>
                    
                </HeaderInputContainer>
            </HeaderSection>
        </React.Fragment>
        
    );
};

export default Header;