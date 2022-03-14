import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useHistory();

    const [data, setData] = useState<string>("")
    const [confirmarSenha, setConfirmarSenha] = useState<String>("");

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: ''
    });

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            dataNascimento: ''

        });

    useEffect(() => {
        if (userResult.id !== 0) {
            console.log(userResult)
            history.push('/login')
        }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function pegaData(e: ChangeEvent<HTMLInputElement>) {
        setData(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
            dataNascimento: data

        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            console.log(JSON.stringify(user))
            toast.success('Usuário cadastrado com sucesso. Agora, faça login para continuar', {
                position: 'top-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: 'top-left',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }
    }
    return (
        <Box display='flex' className='container backgroundCadastro'>
            <Grid className='fundo' item xs={12}>
                <Box display='flex' justifyContent={'center'} paddingX={10}>

                    <form className='formsCadastro' onSubmit={onSubmit}  >

                        <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} > Realize seu cadastro:
                        </Typography>

                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required placeholder='Nome completo' />

                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='email@email.com' />

                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth placeholder='Insira o link da sua foto.' />

                        <TextField value={data} onChange={(e: ChangeEvent<HTMLInputElement>) => pegaData(e)} id="dataNascimento" label="Data de Nascimento" type="date" InputLabelProps={{ shrink: true, }} />

                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Insira no mínimo 8 digitos' />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='ConfirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required placeholder='Confirmar senha de 8 digitos' />

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
        </Box>
    );
}

export default CadastroUsuario;