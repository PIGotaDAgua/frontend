import React, { useEffect } from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/userReducer";
import './Home.css';

//Componentes, nada mais são que funções.
function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
        );  

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
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="title" >Bem vinde a Gota d'água</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className="title">Sua rede social de informações sobre água potável e saneamento.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box className="botton text-decorator-none" marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <br></br>
                        <Link to='postagem'>
                        <Button variant="outlined" className="botton text-decorator-none" > Ver Postagens </Button>
                        </Link>
                    </Box>
                    <br></br>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/DbFlrkb.gif" alt="" width="70%" height="70%" />
                </Grid>
                <Grid xs={12} >
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;