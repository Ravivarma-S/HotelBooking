import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Home() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/api/hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{
      background: "#f5f7fa",
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#333" }}>🏨 Available Hotels</h2>

      {hotels.length === 0 ? (
        <p>Loading hotels...</p>
      ) : (
        hotels.map((hotel) => (
          <div key={hotel.id} style={{
            background: "white",
            margin: "15px auto",
            padding: "15px",
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}>
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>

            <button
              onClick={() => navigate(`/hotel/${hotel.id}`)}
              style={{
                background: "#00c6ff",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
