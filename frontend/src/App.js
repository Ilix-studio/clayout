import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BootcampsPage from "./pages/BootcampsPage";

const App = () => {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<BootcampsPage/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
