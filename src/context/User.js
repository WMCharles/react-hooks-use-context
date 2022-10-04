import { createContext, useState } from "react";

// Context obj
const UserContext = createContext();

// Context Provider Component
function UserProvider({children}){
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}