import React, { createContext, useCallback, useState } from "react";

interface IUser {
  img: string;
  name: string;
}
interface IAppContext {
  user?: IUser;
  updateUser(user: IUser):void;
}

const AppContext = createContext<IAppContext>({
  user: undefined,
  updateUser: () => {}
})

const AppProvider = ({children} : { children: JSX.Element }) => {
  const [data, setData] = useState<IUser>();
 
  const updateUser = useCallback((user: IUser) => {
    console.log(user);
    setData(user);
  }, []);


  return (
    <AppContext.Provider value={{ user: data, updateUser }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };