import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "../pages/Contacts";
import EmailContacts from "../pages/EmailContacts";
import Frequent from "../pages/Frequent";
import Label from "../pages/Label";
import Merge from "../pages/Merge";
import Trash from "../pages/Trash";

function Main() {
  return (
    <div className="w-full m-2 rounded bg-white h-72">
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/frequent" element={<Frequent />} />
        <Route path="/suggestions" element={<Merge />} />
        <Route path="/label/:name" element={<Label />} />
        <Route path="/email-contacts" element={<EmailContacts />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default Main;
