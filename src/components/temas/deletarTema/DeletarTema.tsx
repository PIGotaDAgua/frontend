import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../service/Service';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import './DeletarTema.css';


function DeletarTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state)=> state.tokens
        );    
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token === "") {
            toast.error('Para continuar, é preciso estar logado.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/tema')
            deleteId(`/tema/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
        
            toast.success('Tema excluído.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
          }
        
          function nao() {
            history.push('/tema')
          }
          
  return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja realmente deletar este tema?
                            </Typography>
                            <Typography color='textSecondary'>
                                {tema?.tema}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant='contained' size='large' color='primary'>
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant='contained' size='large' color='secondary'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarTema;