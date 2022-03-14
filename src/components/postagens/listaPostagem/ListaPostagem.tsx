import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../service/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';
import './ListaPostagem.css';


function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisar estar logado para prosseguir', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagem", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box className='fundo' m={2} >
                        <Card variant="outlined" className='card'>
                            <CardContent className='avatar'>
                                <Grid className='conteudo'>
                                    {/* <Typography color='textSecondary' gutterBottom>
                                        Postagens
                                    </Typography> */}

                                    <Typography variant='h5' component='h2' gutterBottom>

                                        <h2>{post.titulo}</h2>
                                    </Typography>

                                    <Typography variant='body2' component='p'>
                                        
                                        <h5>{new Date(post.data).toLocaleString("pt-br")}</h5>
                                    </Typography>
                                    <Typography variant='body2' component='p' gutterBottom>
                                        {post.texto}
                                    </Typography>
                                    <Typography variant='body2' component='p' gutterBottom >

                                        <h3>Tema: {post.tema?.tema}</h3>
                                    </Typography>
                                    <Box className='paddingTop'>
                                        <img className='imgPost' src={post.imagem} alt='' />
                                    </Box>

                                </Grid>
                                <Grid className='usuario'>
                                    <Box className='usuarioNome'>
                                        <Typography variant='body2' component='p'>
                                            {post.usuario?.nome}
                                        </Typography>
                                        <Typography variant='body2' component='p'>
                                            {post.usuario?.usuario}
                                        </Typography>
                                    </Box>

                                    <Box >
                                        <Avatar className='fotoAvatar' alt="Remy Sharp" src={post.usuario?.foto} />
                                    </Box>
                                </Grid>

                            </CardContent>
                            <CardActions className='botaoEsquerda'>
                                <Box display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/formularioPostagem/${post.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarPostagem/${post.id}`} className='text-decorator-none padRight'>
                                        <Box mx={1}>
                                            <Button variant='contained' size='small' color='secondary'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem;