import "./assets/styles/global.css";
import { Route, Routes } from "react-router-dom";
import Gwg from "./assets/pages/landing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Gwg></Gwg>}></Route>
    </Routes>
  );
}

export default App;
