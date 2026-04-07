import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";
import Booking from "./pages/Booking.jsx";

// add this route

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/hotel/:id" element={<HotelDetails />} />
                <Route path="/booking/:roomId" element={<Booking />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
