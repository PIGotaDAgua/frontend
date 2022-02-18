import React from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import Navbar from "../../components/statics/navbar/Navbar";
import './Home.css';

//Componentes, nada mais são que funções.
function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="title" >Seja bem vinde ao Gota D'Água!☺</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className="title">Conteúdos sobre como garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                        <br></br>
                        <Button variant="outlined" className="botton" > Ver Postagens</Button>
                    </Box>
                        <br></br>
                </Grid>
                <Grid item xs={6} >
                    <img className="imagem" src="https://i.imgur.com/Uap25qO.png" alt="" />
                </Grid>
                <Grid xs={12} className='posts'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;