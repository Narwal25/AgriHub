import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Pages/Login";
import Error from "./Components/Pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/header" element={<Header />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
