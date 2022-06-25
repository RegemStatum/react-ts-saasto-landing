import React, { FC, useContext, useState } from "react";

const Context = React.createContext({
  isSidebarOpen: false,
  handleBurgerMenuClick: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppContext: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsSidebarOpen(true);
  };

  return (
    <Context.Provider value={{ isSidebarOpen, handleBurgerMenuClick }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
