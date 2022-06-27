import React, { FC, useContext, useState } from "react";

const Context = React.createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppContext: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Context.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
