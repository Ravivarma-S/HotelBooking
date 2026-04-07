import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    API.get(`/api/rooms/${id}`)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div style={{
      background: "#eef2f3",
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2>🏨 Hotel Details</h2>
      <p>Hotel ID: {id}</p>

      <h3>Available Rooms</h3>

      {rooms.map((room) => (
        <div key={room.id} style={{
          background: "white",
          margin: "15px auto",
          padding: "15px",
          width: "300px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
          <h4>Room No: {room.id}</h4>
          <p>💰 Price: ₹{room.price}</p>

          <button onClick={() => navigate(`/booking/${room.id}`)}>
            Book Room
          </button>
        </div>
      ))}
    </div>
  );
}

export default HotelDetails;
