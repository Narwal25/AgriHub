import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";
import Login from "./Components/Pages/Login";
import Error from "./Components/Pages/Error";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
