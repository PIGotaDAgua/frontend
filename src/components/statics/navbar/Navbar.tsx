import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Navbar.css';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';



    function Navbar() {
        const [token, setToken] = useLocalStorage('token');
        let history = useHistory();

        function goLogout() {
            setToken('')
            toast.info('Desconectado com sucesso', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            history.push('/login')
        }

        return (
            <>
                <AppBar position="static">
                    <Toolbar variant="dense" className='backgroundNav'>
                        <Box className='cursor'>
                            <img className='logo1' src={logo} alt="logo" />
                        </Box>
                        <hr />
                        <Box display="flex" justifyContent="start">
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography className='backgroundNav' variant="h6" >
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>

                            <Box className='backgroundNav cursor' mx={1}>
                                <Link to='/tema' className='text-decorator-none'>
                                    <Typography variant="h6" >
                                        Temas
                                    </Typography>
                                </Link>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Link to='/formularioTema' className='text-decorator-none'>
                                    <Typography variant="h6" >
                                        Cadastrar tema
                                    </Typography>
                                </Link>
                            </Box>
                            <Link to='/about' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" >
                                        Sobre
                                    </Typography>

                                </Box>
                            </Link>
                            <Link to='/contact' className='text-decorator-none'>

                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6">
                                        Contato
                                    </Typography>

                                </Box>
                            </Link>
                            <Link to='/descubra' className='text-decorator-none'>

                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" >
                                        🔎 Descubra Mais
                                    </Typography>

                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor' onClick={goLogout}>
                                    <Typography variant="h6" >
                                        Logout
                                    </Typography>

                                </Box>
                            </Link>
                        </Box>

                    </Toolbar>
                </AppBar>

            </>
        )
    }

export default Navbar;