import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
function AppPage() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="flex flex-no-wrap">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default AppPage;
