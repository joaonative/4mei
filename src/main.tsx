import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import SideWidget from "./components/SideWidget.tsx";
import { UserProvider } from "./UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <div className="flex lg:flex-row justify-between px-5 lg:px-20 py-4">
          <main className="flex-grow w-full mb-20">
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </main>
          <SideWidget />
        </div>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
