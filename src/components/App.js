import React from "react";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./chats/Chats";
import Login from "./login/Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;