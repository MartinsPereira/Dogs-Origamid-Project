import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import userForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Erro from '../Helper/Erro';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const username = userForm();
  const email = userForm('email');
  const password = userForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie a sua Conta" />
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando..</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Erro error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
