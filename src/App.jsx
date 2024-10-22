import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Privacy from "./pages/Privacy";
import PrivacyReport from "./pages/PrivacyReport";
import PrivacyStatement from "./pages/PrivacyStatement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Privacy />}></Route>
          <Route path="/privacy-report" element={<PrivacyReport />}></Route>
          <Route path="/privacy-statement" element={<PrivacyStatement />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
