import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserState } from '../../store/user/userReducer'

import User from '../../models/User'
import { buscaId } from '../../service/Service'

import './Perfil.css'

function Perfil() {

    let history = useHistory()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuario/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{user.nome}</h1>
                    <hr />
                </Box>

                <Box>

                    <p className='card-container-texto'>
                        <h2>Informações de cadastro</h2>
                    </p>

            
                    <Typography className='dados' variant='body2' component='p' gutterBottom>
                       <h3>Usuário: {user.usuario}</h3>   
                    </Typography>
                    <Typography className='dados' variant='body2' component='p' gutterBottom>
                         <h3>Nascimento: {new Date(user.dataNascimento).toLocaleString("pt-br")}</h3>  
                    </Typography>

                </Box>

            </Box>
        </Box>
    )
}

export default Perfil