import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import './Footer.css';

function Footer() {

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== '') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems='center'>
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" gutterBottom className='textos'>Entre em contato conosco:
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
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center"> Gota D'água: All Rights Reserved © 2022</Typography>
                    </Box>
                    <Box>
                        <a className='text-decorator-none' href='https://brasil.generation.org' target="_blank" rel="noreferrer">
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;