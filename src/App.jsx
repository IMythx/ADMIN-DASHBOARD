import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/global/TopBar/TopBar";
import SideBar from "./components/global/sideBar/SideBar";
import { ThemeContext } from "./Theme";
import Team from "./pages/Team";
import Contacts from "./pages/contacts";
import InVoices from "./pages/inVoices";
import Profile from "./pages/Profile";
import Calendar from "./pages/calendar";
import Faq from "./pages/Faq";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Line from "./pages/line";
import Geography from "./pages/geography";
import DashBoard from "./pages/dashboard";

const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  useEffect(() => {
    darkTheme
      ? document.body.classList.add("dark")
      : document.body.removeAttribute("class");
  }, [darkTheme]);
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <TopBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<InVoices />} />
          <Route path="/form" element={<Profile />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
