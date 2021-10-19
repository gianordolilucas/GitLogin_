import React, { useState, useContext } from 'react';
import { FiSearch, FiGithub } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
    Span
} from './styles';

import { context } from '../../context'
import client from '../../services/client';

const Header = () => {

    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');
    const [errors, setErrors] = useState('');



    async function getUserData() {

        if (searchedValue === '' || searchedValue === undefined) {
            setErrors({ userEmpyt: "Campo obrigatório! " })
            console.log("error pq ta vazio")
            return
        } else {
            setErrors({});
        }

        try {
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const followers = await client.get(`/${searchedValue}/followers`);
            const followings = await client.get(`${searchedValue}/following`)
            const starreds = await client.get(`/${searchedValue}/starred`)

            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
            ctx.setFollowers(followers.data)
            ctx.setFollowings(followings.data)
            ctx.setStarreds(starreds.data)

        } catch (err) {
            setErrors({ userNotFound: "Usuário não foi encontrado" })
        }
    }

    return (
        <React.Fragment>
            <HeaderSection>
                <HeaderTitle><FiGithub size={30} /> Github Profile</HeaderTitle>
                <HeaderInputContainer>
                    {/* Ira exibir a mensagem de campo obrigatório */
                        errors.userEmpyt ? <HeaderInput value={searchedValue} placeholder={errors.userEmpyt} onChange={e => setSearchedValue(e.target.value)} /> :

                            <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />}

                    <HeaderSearchButton onClick={getUserData}> <FiSearch /></HeaderSearchButton>
                </HeaderInputContainer>
                {/* Ira exibir a mensagem de usuario nao encontrardo */
                    errors.userNotFound ? <Span className='error' >{errors.userNotFound}</Span> : undefined}
            </HeaderSection>
        </React.Fragment>

    );
};

export default Header;