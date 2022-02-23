import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='backgroundNav'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography className='backgroundNav' variant="h5">
                            Gota D'Água
                        </Typography>
                    </Box>
                    <hr />
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography className='backgroundNav' variant="h6" >
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='backgroundNav' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" >
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" >
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/about' className='text-decorator-none'>

                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                    Sobre
                                </Typography>

                            </Box>
                        </Link>
                        <Link to='/contact' className='text-decorator-none'>

                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6">
                                    Contato
                                </Typography>

                            </Box>
                        </Link>
                        <Link to='/descubra' className='text-decorator-none'>

                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                🔎 Descubra Mais 
                                </Typography>

                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'>

                            <Box mx={1} style={{ cursor: "pointer" }}>
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