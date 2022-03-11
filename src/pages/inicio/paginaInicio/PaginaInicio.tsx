import { AppBar, Box, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './PaginaInicio.css';
import Carousel from '../../../components/carousel/Carousel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
// import About from "../../about/About";



function PaginaInicio() {
    return (
        <>
            <AppBar className="nav" position="static">
                <Toolbar variant="dense" >
                    <Box className="extremo" display="flex" alignItems="center">
                        <Box display="flex" justifyContent="start" alignItems="center">
                            <Box mx={1} className='cursor logoImg'>
                                <img className='logo1' src='https://i.imgur.com/cKPeZ1C.png' alt="logo" />
                            </Box>

                            <Box className="logo2">
                                <Typography className="fonteLogo" variant="h5" color="inherit">
                                    Gota d'Água
                                </Typography>
                            </Box>
                        </Box>

                        <Box display="flex" justifyContent="start" alignItems="center" >

                            <Link to='/cadastrousuario' className='text-decorator-none navPaddingInicio'>
                                <Box display="flex" justifyContent="center">
                                    <Box className="navPaddingInicio:hover cursor" mx={1} >
                                        <Typography className="corLetra" variant="h6" color="inherit">
                                            Cadastre-se
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>

                            <Link to='/login' className='text-decorator-none navPaddingInicio'>
                                <Box display="flex" justifyContent="center">
                                    <Box className="navPadding:hover cursor" mx={1} >
                                        <Typography className="corLetra" variant="h6" color="inherit">
                                            Login
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid className="AppC" >
                <Carousel />
            </Grid>

             {/* <Grid>
                <About />
            </Grid>  */}

            <Grid container direction="row" justifyContent="center" alignItems='center'>
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='textos'>Entre em contato conosco
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a className="hover" href="mailto:pigotadagua@gmail.com" target="_blank" rel="noreferrer">
                                <EmailIcon className='redes' />
                            </a>
                            <a className="hover" href="https://www.youtube.com/channel/UCnpMz26_MJ2k3zSpyvEiQ1g" target="_blank" rel="noreferrer">
                                <YouTubeIcon className='redes' />
                            </a>
                            <a className="hover" href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a className="hover" href="https://github.com/PIGotaDAgua" target="_blank" rel="noreferrer">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>

                    <Box className='footerInicio'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" className='textos' align="center"> Gota D'água: All Rights Reserved © 2022</Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default PaginaInicio;