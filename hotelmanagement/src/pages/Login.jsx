import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {
      setMessage("❌ Must use @gmail.com");
      return;
    }

    // Password validation
    if (password.length < 5) {
      setMessage("❌ Password must be at least 5 characters");
      return;
    }

    // Success
    setMessage("");
    navigate("/home");
  };

  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
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
        <h2>🏨 Hotel Login</h2>

        <input
          type="email"
          placeholder="Enter Gmail"
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />
        <br />

        <button
          onClick={handleLogin}
          style={{
            background: "#4facfe",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px"
          }}
        >
          Login
        </button>

        {message && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
