import React, { useContext, useState } from "react";
import { task } from "../../Library/Interfaces";

type ContextType = {
    taskFormData: task[] | undefined;
    setTaskFormData: React.Dispatch<React.SetStateAction<task[] | undefined>>;
};

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [taskFormData, setTaskFormData] = useState<task[]>();

    return (
        <AppContext.Provider
            value={{
                taskFormData,
                setTaskFormData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useCalenderContext = () => {
    return useContext(AppContext) as ContextType;
};

export default AppProvider;
