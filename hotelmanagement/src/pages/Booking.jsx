import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function Booking() {
  const { roomId } = useParams();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    if (checkIn && checkOut) {

      API.post("/api/book", {
        userId: 1,        // static for now
        roomId: roomId,
        checkIn: checkIn,
        checkOut: checkOut
      })
        .then((res) => {
          setMessage("✅ Booking successful");
        })
        .catch((err) => {
          console.log(err);
          setMessage("❌ Booking failed");
        });

    } else {
      setMessage("❌ Please select dates");
    }
  };

  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}>
        <h2>🛏️ Book Room</h2>
        <p>Room ID: {roomId}</p>

        <div>
          <label>Check-In Date</label><br />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            style={{ margin: "10px", padding: "8px" }}
          />
        </div>

        <div>
          <label>Check-Out Date</label><br />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            style={{ margin: "10px", padding: "8px" }}
          />
        </div>

        <button
          onClick={handleBooking}
          style={{
            background: "#ff758c",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Confirm Booking
        </button>

        {/* ✅ Message */}
        {message && (
          <p style={{
            marginTop: "15px",
            fontWeight: "bold",
            color: message.includes("✅") ? "green" : "red"
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Booking;
