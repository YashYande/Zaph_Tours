import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/HomePage";
import DestinationList from "./components/DestinationList";
import TripTypes from "./components/TripTypes";
import ContactUs from "./components/ContactUs";
import Ronny from "./components/Ronny";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppBar />} />
          <Route path="/Places" element={<DestinationList />} />
          <Route path="/TripTypes" element={<TripTypes />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/ronny" element={<Ronny />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
