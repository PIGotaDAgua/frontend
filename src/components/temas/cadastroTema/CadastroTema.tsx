import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Box } from '@material-ui/core';
import { useHistory, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../service/Service";
import { toast } from "react-toastify";
import './CadastroTema.css';
import { useSelector } from "react-redux";
import { UserState } from "../../../store/user/userReducer";


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: "",
        descricao: ''
    })

    useEffect(() => {
        if (token === '') {
            toast.error('Opa! Para continuar, é preciso estar logado.', {
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

    useEffect(() => {
        if (id !== undefined)
            findById(id)
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updateTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Legal! Tema atualizado :)', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Pronto. Tema cadastrado ^.^', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }
        back()

    }

    function back() {
        history.push('/tema')
    }

    return (
        <Box className='backgroundTema'>
            <Container maxWidth='sm' className='topo'>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                        Crie ou atualize um tema selecionado:
                    </Typography>
                    <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTema(e)} id='tema' label='Tema' variant='outlined' name='tema' margin='normal' fullWidth />
                    <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTema(e)} id='descricao' label='Descrição' variant='outlined' name='descricao' margin='normal' fullWidth />
                    <Button type='submit' variant='contained' color='primary' className='btF'>
                        Finalizar
                    </Button>
                </form>
            </Container>
        </Box>

    )
}

export default CadastroTema;