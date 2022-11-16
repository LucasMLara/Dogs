import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    console.log("entrou");
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }
  return (
    <section>
      LoginForm
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />
        {username}
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {password}
        <button>Enviar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
