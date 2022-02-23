import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import User from '../../models/User';
import UserLogin from '../../models/UserLogin';
import { cadastroUsuario } from '../../service/Service';

import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [dataNascimento, setDataNascimento = useState<Date>();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            dataNascimento: ''
        });

    const [userResult, setUserResult] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        });

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push('/login')
            console.log(userResult)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value

        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            console.log(user.usuario)
            console.log(user.nome)
            console.log(user.senha)
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso')
        } else {
            alert('Dados Inconsistentes. Favor verificar as informações de cadastro')
        }
    }
    return (
        <Grid container className='container'>
            <Grid item xs={6} className='imagem'></Grid>
            <Grid item xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2' >Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required placeholder='Nome completo' />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='email@email.com' />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Insira no mínimo 8 digitos' />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='ConfirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required placeholder='Confirmar senha de 8 digitos' />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth required placeholder='Insira o link da sua foto.' />
                        <TextField value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='dataNascimento' label='Data de Nascimento' variant='outlined' name='dataNascimento' margin='normal' fullWidth required placeholder='Informe sua data de nascimento.' />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;