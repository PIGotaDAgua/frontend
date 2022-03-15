import { Box, Grid } from '@material-ui/core';
import React from 'react';
import './DescubraMais.css';

function DescubraMais() {
    return (
        <Grid container justifyContent='center' alignItems='center' className='container backgroundDescubra'>
            <Grid direction='column' xs={4} className='cardDescubra'>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <img src="https://i.imgur.com/hk8BwmU.png" alt="" width='130x' height='130px' />
                </Box>
                <Box display='flex ' justifyContent='center' alignItems='center'>
                    <p >
                        <h2 className='texto'>Videos Relacionados</h2>
                        <a className='texto' href="https://www.youtube.com/watch?v=ydH9YpoxpsI"> • ODS #6: Água limpa e saneamento | IBGE Explica</a>
                        <br />
                        <a className='texto' href="https://www.youtube.com/watch?v=M3WeYor43kY">• ODS #6 para crianças – Água Potável e Saneamento</a>
                        <br />
                        <a className='texto' href="https://www.youtube.com/watch?v=Csflt1q5y4g">• Saneamento Básico: Um Drama Brasileiro | Curta Documentário | bmpcc</a>
                        <br />
                        <a className='texto' href="https://www.youtube.com/watch?v=kesc1Ynzapk">• Caminhos e Soluções - ODS #6</a>
                    </p>
                </Box>
            </Grid>
            <Grid direction='column' alignItems='center' xs={4} className='cardDescubra'>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <img src="https://i.imgur.com/BMEcoUE.png" alt="" width='130x' height='130px' />
                </Box>
                <Box display='flex ' justifyContent=' center' alignItems='center'>
                    <p className='texto'>
                        <h2 >Telefones Úteis</h2>
                        • Sabesp: 0800 - 055 0195
                        <br />
                        • Sabesp - Serviços de Emergência: 195
                        <br />
                        • Casa ONU Brasil: +55 (61) 3038-9300
                        <br />
                        • Instituto Trata Brasil: (11) 3021-3143
                    </p>
                </Box>

            </Grid>
            <Grid direction='column' alignItems='center' xs={4} className='cardDescubra'>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <img src="https://i.imgur.com/0wW0Mes.png" alt="" width='130x' height='130px' />
                </Box>
                <Box display='flex ' justifyContent=' center' alignItems='center'>
                    <p className='texto'>
                        <h2>ONG's e -E-commerce</h2>
                        <a className='texto' href="https://www.atados.com.br/ong/associacao-agua-sustentavel-1">• Associação Água Sustentável</a>
                        <br />
                        <a className='texto' href="https://caminhodasaguas.org.br/">• Movimento Sócio-Ambiental Caminho das Águas</a>
                        <br />
                        <a className='texto' href="https://habitatbrasil.org.br/projetos/acesso-a-agua/agua-para-vidas/">• Habitat para a Humanidade Brasil - Projeto Águas para Vidas</a>
                        <br />
                        <a className='texto' href="https://tratabrasil.org.br/pt/">• Instituto Trata Brasil</a>
                        <br />
                        <a className='texto' href="https://projetoigarape.vercel.app/">• Projeto Igarapé</a>
                    </p>
                </Box>

            </Grid>

        </Grid>
    )
}

export default DescubraMais;