import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import { useHistory } from 'react-router-dom'
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';
import './ListaTema.css';


function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state)=> state.tokens
        );  

    useEffect(()=>{
        if(token == ''){
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    async function getTema() {
        await busca("/tema/all", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema =>(
                <Box m={2}>
                    <Card variant="outlined">
                        <CardContent>
                            {/* <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography> */}
                            <Typography variant="h5" component="h2">
                              <h2>{tema.tema}</h2>  
                            </Typography>
                            <Typography variant="h6" component="h2">
                               
                              <h4>{tema.descricao}</h4> 
                            </Typography>
                        </CardContent>
                        <CardActions className='botaoEsquerda1'>
                            <Box display="flex" justifyContent="center" mb={.5} >

                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary">
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none padRight1">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary" className='deletartema'>
                                            deletar
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
    );

}
export default ListaTema;
