import { createContext, useContext, useState } from 'react';

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [camera, setCamera] = useState([]);

    const value = {
        tasks, setTasks,
        camera, setCamera
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)