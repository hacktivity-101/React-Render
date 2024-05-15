import { createContext } from "react";

const AppProvider = ({ children, value }) => {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };