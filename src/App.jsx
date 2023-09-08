import Navbar from "./components/Navbar";
import Logo from "./assets/logo.svg";
import AllBoards from "./components/AllBoards";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <>
      <div className="flex">
        <div className="layout-left w-1/5 min-h-screen bg-[rgba(0,0,0,0.5)]">
          <div className="layout_left_navbar flex items-center px-6 text-2xl py-6 text-white gap-2">
            <img className="text-4xl" src={Logo} alt="logo" />
            <a href="/" className="font-bold heading-font">
              Kanban
            </a>
          </div>
          <AllBoards />
        </div>
        <div className="layout-right w-4/5">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/:id"
              element={
                <>
                  <Navbar />
                  <Main />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
