import { createContext } from "react";

// Context obj
const UserContext = createContext();

// Context Provider Component
function UserProvider({children}){
    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}