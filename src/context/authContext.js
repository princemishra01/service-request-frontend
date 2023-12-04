import { createContext, useContext, useState } from "react";

let token , setToken ;

export const AuthContext = createContext({
    token, setToken
})

export const AuthProvider = AuthContext.Provider

export default function useAuth(){
    return useContext(AuthContext)
}