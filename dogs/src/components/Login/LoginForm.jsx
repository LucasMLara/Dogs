import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      LoginForm
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
