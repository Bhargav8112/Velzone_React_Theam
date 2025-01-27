import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch all user data from the API
      const response = await axios.get(`https://localhost:7265/api/Login`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      if (response.status === 200) {
        const users = response.data; // Assuming API returns an array of user data

        // Check if entered username and password match any user
        const user = users.find(
          (u) => u.userName === username && u.password === password
        );

        if (user) {
          alert("Login successful!");
          // Navigate to the home page
          navigate("/home");
        } else {
          setError("Invalid username or password.");
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div>
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card mt-4 card-bg-fill">
          <div className="card-body p-4">
            <div className="text-center mt-2">
              <h5 className="text-primary">Welcome Back!</h5>
              <p className="text-muted">Sign in to continue to Velzon.</p>
            </div>
            <div className="p-2 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password-input">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mt-4">
                  <button className="btn btn-primary w-100" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
