import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // const response = await api.post("/sessions", { email });
    // const { _id } = response.data;
    // localStorage.setItem("user_id", _id);
    // history.push("/dashboard");
    // console.log(_id);
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <p>
          Ofrezca <strong>spots</strong> para los programadores y encuentre{" "}
          <strong>talentos</strong> para tu empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Su mejor email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Su mejor password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
