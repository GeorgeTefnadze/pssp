import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Projects from "./Projects";
import IframeView from "./IframeView";
import Form from "./components/Form";
import { DataProvider } from "./DataContext";

export default function RouteManager() {
  return (
    <>
      <DataProvider>
        <Header />
        <LeftMenu />
        <section className="routerWrapper bg-primaryBg w-full min-h-screen pt-[104px] md:pl-[240px]">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/iframe/:src" element={<IframeView />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </section>
      </DataProvider>
    </>
  );
}
