import React, { useContext, useState } from "react";

interface formData {
    title: string;
    description: string;
    endDate: Date;
    startTime: number;
    endTime: number;
}

type ContextType = {
    taskFormData: formData[] | undefined;
    setTaskFormData: React.Dispatch<
        React.SetStateAction<formData[] | undefined>
    >;
};

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [taskFormData, setTaskFormData] = useState<formData[]>();

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
