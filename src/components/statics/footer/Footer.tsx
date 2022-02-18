import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems='center'>
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Entre em contato conosco
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="mailto:pigotadagua@gmail.com" target="_blank" rel="noreferrer">
                                <EmailIcon className='redes' />
                            </a>
                            <a href="https://www.youtube.com/channel/UCnpMz26_MJ2k3zSpyvEiQ1g" target="_blank" rel="noreferrer">
                                <YouTubeIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://github.com/PIGotaDAgua" target="_blank" rel="noreferrer">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" gutterBottom  className='textos' align="center">© 2022 Projeto Integrador Gota D'água: All Rights Reserved</Typography>
                        </Box>
                        <Box>
                            <a href='https://brasil.generation.org' target="_blank" rel="noreferrer">
                                <Typography variant="subtitle2" gutterBottom  className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;