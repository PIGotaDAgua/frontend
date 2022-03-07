import React, { useEffect } from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import './Home.css';
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { toast } from "react-toastify";

//Componentes, nada mais são que funções.
function Home() {

    let history = useHistory();

    const [ token, setToken ] = useLocalStorage ('token');

    useEffect(() => {
        if (token === '') {
            toast.error('Para continuar, é preciso estar logado.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            history.push('/login')

        }
    }, [token])
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