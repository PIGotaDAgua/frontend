import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';
import './DeletarPostagem.css';

function DeletarPostagem() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Postagem>()
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagem/${id}`, setPost, {
      headers: {
        'Authorization': token
      }

    })
  }

  function sim() {
    history.push('/postagem')
    deleteId(`/postagem/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    toast.success('Postagem deletada com sucesso', {
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

  function nao() {
    history.push(`/postagem`)
  }

  return (
    <>
      <Box className='centerModal' m={2}>
        <Card  variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>

                <h2> Deseja realmente deletar essa postagem?</h2>
              </Typography>
              <Typography color="textSecondary" >
                
                <h3>{post?.titulo}</h3>
              </Typography>
            </Box>

          </CardContent>
          <CardActions className='centerModal1'>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
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
export default DeletarPostagem;