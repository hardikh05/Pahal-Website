import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="pl-3 pr-3 justify-center">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        {/* other components */}
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
