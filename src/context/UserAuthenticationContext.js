import React, {useState, createContext} from 'react'

export const UserAuthenticationContext = createContext();

export const UserAuthenticationContextProvider = (props) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const updateLogInStatus = () => {
        console.log('inside the context provider',isUserLoggedIn);
        setIsUserLoggedIn(!isUserLoggedIn);
    }
    return (
        <UserAuthenticationContext.Provider value={[isUserLoggedIn, updateLogInStatus]}>
            {props.children}
        </UserAuthenticationContext.Provider>
    )
}