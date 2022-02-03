import React from "react";
import { Route, Routes } from "react-router-dom";
import { Aside, Dialogs, Footer, Header, Music, News, Profile, Settings } from "./components";


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <div className="content">
        <Routes>
          <Route path="profile" element={<Profile/>}/>
          <Route path="dialogs" element={<Dialogs />}/>
          <Route path="dialogs/:id" element={<Dialogs />}/>

          <Route path="news" element={<News />}/>
          <Route path="music" element={<Music />}/>
          <Route path="settings" element={<Settings />}/>
        </Routes>

      </div>

      <Footer />
    </div>
  );
};

export default App;
