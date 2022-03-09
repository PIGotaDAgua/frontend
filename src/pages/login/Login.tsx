import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import './Login.css';

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history.push('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuario/logar`, userLogin, setToken)

            toast.success('Você está conectado a nós!☺', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        } catch (error) {

            toast.error('Ops... Algo está errado. Verifique seu login e senha.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });


        }
        console.log('userLogin:' + Object.values(userLogin));
    }

    return (

        <Grid className='spaceTop background' container direction="row" justifyContent='center' alignItems='center'>
            <Box paddingX={20}>
                <form className='formsLogin' onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} > Entrar </Typography>
                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='email@email.com' />
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Insira a senha com no mínimo de 8 digitos' />
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' color='primary'>
                            Logar
                        </Button>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link className='text-decorator-none' to={"/cadastrousuario"}>
                            <Button variant='contained' color='secondary' className="btnCadastro">
                                <Typography className='test' variant='subtitle1' align='center'>Cadastre-se</Typography>
                            </Button>
                        </Link>
                    </Box>
                </form>

            </Box>
        </Grid>
    );
}

export default Login;