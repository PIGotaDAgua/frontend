import React, { useEffect } from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { UserState } from "../../store/user/userReducer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Home.css';


//Componentes, nada mais são que funções.
function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
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
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className="title">Uma rede para ajudar a alcançar a ODS  (Objetivo de Desenvolvimento Sustentável) 6 da ONU.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box className="botton" marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <br></br>
                        <Link to='postagem' className='text-decorator-none'>
                            <Button variant="outlined" className="botton" > Ver Postagens </Button>
                        </Link>
                    </Box>
                    <br></br>
                </Grid>
                <Grid item xs={6} >
                    <img  src="https://i.imgur.com/DbFlrkb.gif" alt="" width="90%" height="90%" />
                </Grid>

                <hr className="hr" />

                <Grid className='container' xs={12}>
                    <Card className='cardHome' sx={{ maxWidth: 400 }}>
                        <CardActionArea href='https://brasil.un.org/pt-br/sdgs' target='_blank'>
                            <CardMedia className="imageCard"
                                component="img"
                                height="140"
                                image="https://i.imgur.com/smjelGx.jpg"
                                alt="onu6"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    ODS 6
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                    <p>Conheça o que é e saiba onde encontrar informações sobre a ODS 6 da ONU, relacionada a água potável e saneamento básico.</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='cardHome' sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <Link to='/about' className="text-decorator-none title">
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
                            </Link>
                        </CardActionArea>
                    </Card>

                    <Card className='cardHome' sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <Link to='/descubra' className="text-decorator-none title">
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
                            </Link>
                        </CardActionArea>
                    </Card>

                </Grid>
            </Grid>
        </>
    );
}

export default Home;