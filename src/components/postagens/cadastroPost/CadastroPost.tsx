import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';
import './CadastroPost.css';
import User from '../../../models/User';


function CadastroPost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
         (state) => state.tokens
     );

     // Pega o ID guardado no Store
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            tema: '',
            descricao: ''
        });

    const [postagem, setPostagem] = useState<Postagem>(
        {
            id: 0,
            titulo: '',
            texto: '',
            data: '',
            imagem: '',
            tema: null,
            usuario: null
        });

    const [user, setUser] = useState<User>(
        {
            id: +userId,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            dataNascimento: ''
        });

    useEffect(() => {
        if (token === "") {
            toast.error("Opa! Para continuar, é preciso estar logado.", {
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

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== '') {
            findByIdPostagem(id);
        }
    }, [id])

    async function getTemas() {
        await busca(`/tema/all`, setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: user
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(postagem)   

        if (id !== undefined) {
            put(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Legal! Postagem atualizada !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Pronto. Postagem realizada ^.^!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        history.push('/postagem')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography className='texto' variant="h4" color="textSecondary" component="h1" align="center" >No que você está pensando hoje?</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth placeholder='Título' required/>

                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth placeholder='Escreva sua postagem' required/>

                <TextField value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" label="Imagem" name="imagem" variant="outlined" margin="normal" fullWidth placeholder='Insira uma Url'/>

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"

                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>
                                    {tema.tema}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Publicar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;