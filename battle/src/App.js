import React from "react";
import Header from "./Header";
import PopularRepos from "./Popular";
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <PopularRepos />
      </div>
    </>
  );
}
