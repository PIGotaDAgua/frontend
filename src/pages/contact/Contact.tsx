import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    return (
        <Grid container direction="row" justifyContent='center' alignItems='center' className='backgroundContato'>
            <Grid alignItems='center' xs={6} className='cardContato' >
                <Box paddingX={15} >
                    <form >
                        <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' style={{ fontWeight: 'bold' }} > Fale com a gente: </Typography>
                        <TextField id='nomeCompleto' label='Nome completo' variant='outlined' name='nomeCompleto' margin='normal' fullWidth />
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />
                        <TextField id='telefone' label='Telefone' variant='outlined' name='telefone' type='tel' margin='normal' fullWidth />
                        <TextField id='texto' label='Texto' variant='outlined' name='texto' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            {/* <Grid xs={6} className='imagem'  >
            </Grid> */}
        </Grid>
    );
}

export default Contact;