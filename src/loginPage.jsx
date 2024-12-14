import React, { useState } from "react";
import { Login, Register } from "./api/apiAuth"; // Import fungsi API
//import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Login(loginData);
      setSuccess("Login berhasil!");
      setError(""); // Reset error jika sukses
      sessionStorage.setItem("token", response.token); // Simpan token ke sessionStorage
    } catch (err) {
      setError(err.message || "Login gagal. Periksa kembali data Anda.");
      setSuccess(""); // Reset success jika error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Register(registerData);
      setSuccess("Registrasi berhasil! Silakan login.");
      setError(""); // Reset error jika sukses
    } catch (err) {
      setError(err.message || "Registrasi gagal. Periksa kembali data Anda.");
      setSuccess(""); // Reset success jika error
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ margin: "10px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
              style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
              style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px", width: "100%" }}>Login</button>
        </form>
      </div>

      <div style={{ margin: "10px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Nama:</label>
            <input
              type="text"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              required
              style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              required
              style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              required
              style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px", width: "100%" }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
