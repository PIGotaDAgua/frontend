import React, { useEffect } from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/userReducer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Home.css';


//Componentes, nada mais são que funções.
function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
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
                    <img src="https://i.imgur.com/DbFlrkb.gif" alt="" width="100%" height="100%" />
                </Grid>
                <Grid className='container' xs={12}>
                    <Card className='card' sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia className="imageCard"
                                component="img"
                                height="140"
                                image="https://i.imgur.com/smjelGx.jpg"
                                alt="onu6"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    ODS 6 - Objetivos de Desenvolvimento Sustentável
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    <p>A água e o saneamento básico são recursos vitais e direitos humanos, cujos acessos são essenciais para a saúde, sustentabilidade ambiental e prosperidade econômica. A extrema importância da água e do saneamento levou ao sexto objetivo dos ODS. Saiba onde encontrar mais informações.</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card' sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia className="imageCard"
                                component="img"
                                height="140"
                                image="https://i.imgur.com/7dfIeRb.png"
                                alt="team"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Time de Desenvolvimento
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    <p>Saiba quem faz parte equipe desenvolvedora desta Rede Social.</p>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card' sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia className="imageCard"
                                component="img"
                                height="140"
                                image="https://i.imgur.com/Qp1uraV.png"
                                alt="agua"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rede de Apoio
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    <p>Encontre pessoas que apoiam a causa e meios de ajudar com ações, ou até mesmo trabalhos voluntários.</p>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;
