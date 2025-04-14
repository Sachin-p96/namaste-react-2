import { createContext } from "react";

const UserContext = createContext({
    loggedinUser : "default User"
})

export default UserContext;