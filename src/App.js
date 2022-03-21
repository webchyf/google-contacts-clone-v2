import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppPage from "./pages/AppPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [auth, setAuth] = useState(null);
  return (
    <div>
      <BrowserRouter>{!auth ? <AppPage /> : <AuthPage />}</BrowserRouter>
    </div>
  );
}

export default App;
