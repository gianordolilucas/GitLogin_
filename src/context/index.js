import React, { useState, createContext } from 'react'

export const context = createContext();


export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followers, setFollowers] = useState({});
    const [followings, setFollowings] = useState({});
    const [starreds, setStarreds] = useState({});

    //Usuario selecionado
    const [userDataFollow, setUserDataFollow] = useState({});
    const [reposFollow, setReposFollow] = useState({});
    const [followersFollow, setFollowersFollow] = useState({});
    const [followingsFollow, setFollowingsFollow] = useState({});
    const [starredsFollow, setStarredsFollow] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            followers,
            followings,
            starreds,

            userDataFollow,
            reposFollow,
            followersFollow,
            followingsFollow,
            starredsFollow,


            setUserData,
            setRepos,
            setFollowers,
            setFollowings,
            setStarreds,

            setUserDataFollow,
            setReposFollow,
            setFollowersFollow,
            setFollowingsFollow,
            setStarredsFollow
        }}>
            {props.children}
        </context.Provider>

    )
}