import React,{useState, createContext} from 'react';


export const UserContext=createContext();


export const UseProvider=(props)=>{
    const [movies,setUserState]=useState([{
        name:'welcome',price:"10$"
    },
    {
        name:'welcome',price:"10$"
    },
    {
        name:'welcome',price:"10$"
    },
    {
        name:'welcome',price:"10$"
    }
])

    return(
        <UserContext.Provider value={ [movies,setUserState]}>
            {props.children}
        </UserContext.Provider>
    )
}
// export default UseProvider;