import { FiArrowRight } from 'react-icons/fi';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Section,
    Title,
    ListOfFollowers,
    Follower,
    FollowerPhoto,
    FollowerName,
    FollowingDetails

} from './styles'

import { context } from '../../context'
import client from '../../services/client';

const FollowersContainer = props => {

    const ctx = useContext(context);

    const history = useHistory();
    const handleOnclick = route => history.push(route);

    async function getUserFollow(user) {

        try {
            const response = await client.get(`/${user}`);
            const repos = await client.get(`/${user}/repos`);
            const followers = await client.get(`/${user}/followers`);
            const followings = await client.get(`${user}/following`)
            const starreds = await client.get(`${user}/starred`)

            ctx.setUserDataFollow(response.data)
            ctx.setReposFollow(repos.data)
            ctx.setFollowersFollow(followers.data)
            ctx.setFollowingsFollow(followings.data)
            ctx.setStarredsFollow(starreds.data)

            handleOnclick('/FollowDetails')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Section>
            <Title>{props?.name} Seguidores </Title>
            <ListOfFollowers>
                {(props?.followers).map(follower => (
                    <Follower key={follower?.id} onClick={() => getUserFollow(follower?.login)}>
                        <FollowerPhoto src={follower?.avatar_url} />
                        <FollowerName>#{follower?.login}</FollowerName>
                        <FollowingDetails>
                            <FiArrowRight />
                        </FollowingDetails>
                    </Follower>
                ))}
            </ListOfFollowers>
        </Section>

    );

}
export default FollowersContainer;
