import React, { useState } from 'react';
import { Input, ButtonSubmit, ErroText } from "../../../Styles/LoginPage/Forms.js";
import axios from 'axios';

const Forms = ({ ...props }) => {

    const [identificador, setIdentificador] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3333/login/validar', { identificador, senha });
            if (response.status === 200) {
                window.location.href = '/paginaInicial';
            }
        } catch (err) {
            setError('⚠️ Não foi possível encontrar o usuário!');
            setTimeout(() => { window.location.reload(); }, 2000)
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <Input
                id="identificador"
                name="identificador"
                type="text"
                value={identificador}
                onChange={({ target }) => setIdentificador(target.value)}
                placeholder="Identificador do Funcionário"
                required
                {...props}
            />
            <Input
                id="senha"
                name="senha"
                type="password"
                value={senha}
                onChange={({ target }) => setSenha(target.value)}
                placeholder="Digite sua senha"
                required
                {...props}
            />
            {error && <ErroText> {error} </ErroText>}
            <ButtonSubmit type="submit">Acessar</ButtonSubmit>

        </form>
    );
};

export default Forms;
