import React, { useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/ContextProvider/Context";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/dashboard/pages/Profile";
import Dashboard from "./components/Dashboard";
import Employees from "./components/dashboard/pages/Employees";
import Statistics from "./components/dashboard/pages/Statistics";
import Settings from "./components/dashboard/pages/Settings";
import Error from "./components/Error";
import Alerts from "./components/dashboard/pages/Alerts";
import PeopleDetection from "./components/dashboard/pages/PeopleDetection";
import LiveVideoFeed from "./components/dashboard/pages/live-video-page/LiveVideoFeed";

import ViewAllFeed from "./components/dashboard/pages/live-video-page/cameras/ViewAllFeed";
import Camera1 from "./components/dashboard/pages/live-video-page/cameras/Camera1";
import Camera2 from "./components/dashboard/pages/live-video-page/cameras/Camera2";
import Camera3 from "./components/dashboard/pages/live-video-page/cameras/Camera3";
import Camera4 from "./components/dashboard/pages/live-video-page/cameras/Camera4";
import Camera5 from "./components/dashboard/pages/live-video-page/cameras/Camera5";
import Camera6 from "./components/dashboard/pages/live-video-page/cameras/Camera6";
import Camera7 from "./components/dashboard/pages/live-video-page/cameras/Camera7";
import ForgotPassword from "./components/login/ForgotPassword";
import AiVideoFeed from "./components/dashboard/pages/live-video-page/AiVideoFeed";

function App() {
  const [data, setData] = useState(false);
  const { setLoginData } = useContext(LoginContext);

  useEffect(() => {
    const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");

      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await res.json();

      if (data.status === 401 || !data) {
        console.log("user not valid");
      } else {
        console.log("user verified");
        setLoginData(data);
      }
    };

    const fetchData = async () => {
      await DashboardValid();
      setData(true);
    };

    fetchData();
  }, [setLoginData]);

  return (
    <>
      {data ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/live-video-feed" element={<LiveVideoFeed />} />
            <Route path="/people-detection" element={<PeopleDetection />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/view-all-feed" element={<ViewAllFeed />} />
            <Route path="/camera1" element={<Camera1 />} />
            <Route path="/camera2" element={<Camera2 />} />
            <Route path="/camera3" element={<Camera3 />} />
            <Route path="/camera4" element={<Camera4 />} />
            <Route path="/camera5" element={<Camera5 />} />
            <Route path="/camera6" element={<Camera6 />} />
            <Route path="/camera7" element={<Camera7 />} />
            <Route path="aivideo" element={<AiVideoFeed />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <div className="flex justify-center ml-60 mt-8 items-center h-screen">
          Loading...
        </div>
      )}
    </>
  );
}

export default App;
