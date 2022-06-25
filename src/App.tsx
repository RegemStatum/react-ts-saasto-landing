import React from "react";
import AppContext from "./context/AppContext";
import Navigation from "./pages/Navigation";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <AppContext>
      <GlobalStyle />
      <Navigation />
    </AppContext>
  );
}

export default App;
