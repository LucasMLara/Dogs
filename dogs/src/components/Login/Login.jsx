import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import { UserContext } from "../../UserContext";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
