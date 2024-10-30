"use client";

import { User } from "@prisma/client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  user: User | null | undefined;
  setUser: Dispatch<SetStateAction<User | null | undefined>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  token: "",
  setToken: () => {},
});

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const userToken =
    typeof window !== "undefined" &&
    (localStorage.getItem("userToken")
      ? JSON.parse(localStorage.getItem("userToken")!)
      : "");

  const [token, setToken] = useState<string>(userToken);


  useEffect(()=>{

    ;(async function(){
      try{

        const res = await fetch('/api/me',{
          method:'POST',
          credentials:"include",
          headers:{
            'authorization':`Bearer ${userToken}`
          }
        });

        const data = await res.json();

        if(!data.success){
          throw new Error('Invalid credential!')
        }

        setIsLoggedIn(true);
        setUser(data.user)

      }catch(err){
        console.log('Invalid credential!')
      }
    })()

  },[])

  return (
    <Context.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, token, setToken }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCtx = () => {
  return useContext(Context);
};

export default ContextProvider;
