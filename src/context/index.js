import React, {useState, createContext} from 'react'

export const context = createContext();


export const ContextProvider = props => {
    const [userData, setUserData ] = useState({});
    const [repos, setRepos] = useState({});
    const [followers, setFollowers ] = useState({});
    const [followings, setFollowings] = useState({});

    //Usuario selecionado
    const [userDataFollow, setUserDataFollow ] = useState({});
    const [reposFollow, setReposFollow] = useState({});
    const [followersFollow, setFollowersFollow ] = useState({});
    const [followingsFollow, setFollowingsFollow] = useState({});
    
    return (
        <context.Provider value={{
            userData,
            repos,
            followers,
            followings,

            userDataFollow,
            reposFollow,
            followersFollow,
            followingsFollow,

            
            setUserData,
            setRepos,
            setFollowers,
            setFollowings, 

            setUserDataFollow,
            setReposFollow,
            setFollowersFollow,
            setFollowingsFollow
        }}>
            {props.children}
        </context.Provider>

    )
}