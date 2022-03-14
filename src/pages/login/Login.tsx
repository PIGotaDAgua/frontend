import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/user/action';
import './Login.css';

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
            dataNascimento: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
            dataNascimento: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(respUserLogin.token !== ""){

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token)) 
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/home')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuario/logar`, userLogin, setRespUserLogin)

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

        <Grid className='spaceTop backgroundLogin' container direction="row" justifyContent='center' alignItems='center'>
            <Box paddingX={20}>
                <form className='formsLogin' onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} > Entrar </Typography>

                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='email@email.com' />
                    
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Insira a senha com no mínimo de 8 digitos' />

                    <Box display="flex" justifyContent="center">
                        <Link className= "text-decorator-none" to='/'>
                            <Box marginTop={2} textAlign='center'>
                                <Button className='btnSpace' type='submit' variant='contained' color='primary'>
                                    Voltar
                                </Button>
                            </Box>
                        </ Link>

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>

                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link className='text-decorator-none' to={"/cadastrousuario"}>
                            
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            
                        </Link>
                    </Box>
                </form>

            </Box>
        </Grid>
    );
}

export default Login;