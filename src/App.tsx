import React from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
