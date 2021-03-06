import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { addToken } from '../../../store/user/action';
import './Navbar.css';

function Navbar() {
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    );
    let history = useHistory();

    function goLogout() {
        dispatch(addToken(''))
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

    var navbarComponent;

    if (token != '') {
        navbarComponent =
            <AppBar position="static">
                <Toolbar variant="dense" className='backgroundNav'>
                    <Link to='/home'>
                        <Box className='cursor'>
                            <img className='logo1' src='https://i.imgur.com/cKPeZ1C.png' alt="logo" />
                        </Box>
                    </Link>
                    <Box className="spaceLeft" display="flex" justifyContent={'right'}>
                        <Box display="flex" justifyContent="start">
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography className='backgroundNav' variant="h6" >
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} className='cursor backgroundNav'>
                                <Link to='/postagem' className='text-decorator-none'>
                                    <Typography variant="h6" color="inherit">
                                        Postagens
                                    </Typography>
                                </Link>
                            </Box>

                            <Box className=' cursor ' mx={1}>
                                <Link to='/tema' className='text-decorator-none '>
                                    <Typography variant="h6" >
                                        Temas
                                    </Typography>
                                </Link>
                            </Box>
                            <Box mx={1} className='cursor backgroundNav'>
                                <Link to='/formularioTema' className='text-decorator-none'>
                                    <Typography variant="h6" >
                                        Cadastrar tema
                                    </Typography>
                                </Link>
                            </Box>
                            <Link to='/about' className='text-decorator-none'>
                                <Box mx={1} className='cursor backgroundNav'>
                                    <Typography variant="h6" >
                                        Sobre
                                    </Typography>

                                </Box>
                            </Link>
                            <Link to='/contact' className='text-decorator-none'>

                                <Box mx={1} className='cursor backgroundNav'>
                                    <Typography variant="h6">
                                        Contato
                                    </Typography>

                                </Box>
                            </Link>
                            <Link to='/descubra' className='text-decorator-none '>

                                <Box mx={1} className='cursor backgroundNav'>
                                    <Typography variant="h6" >
                                        ???? Descubra mais
                                    </Typography>
                                </Box>

                            </Link>

                            <Link to='/perfil' className='text-decorator-none'>
                                <Box className="" marginRight='auto' display="flex" justifyContent="start">
                                    <Box mx={1} className='cursor'>
                                        <Typography variant="h6" color="inherit">
                                            Perfil
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>

                            <Link to='/' className='text-decorator-none spaceLeft navPaddingCanto'>
                                <Box mx={1} className='cursor backgroundNav ' onClick={goLogout}>
                                    <Typography className='corLetraRed' variant="h5" >
                                        Sair
                                    </Typography>

                                </Box>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;