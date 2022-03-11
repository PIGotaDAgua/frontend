import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './About.css';

function About() {
    return (
        <Grid container direction="column" justifyContent='center' alignItems='center'>
            <Grid className='titulo' alignItems='center' xs={12}>
                <h1 className='aboutH1'> 💧 Conheça a equipe desenvolvedora Gota d'Água 💧 </h1>
            </Grid>
            <Grid container direction="row" alignItems='center' justifyContent='center' xs={12}>
                <Card className='cardAbout' sx={{ maxWidth: 300 }}>
                    <CardActionArea href='https://github.com/danielpramos'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="300"
                            image="https://i.imgur.com/ti5g4dj.jpg"
                            alt="dani"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Daniel Pinheiro
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                <p>Desde pequeno curioso sobre assuntos envolvendo tecnologia,tenho 30 anos, nascido em São Caetano do Sul e residente em Santo André, alguns de meus hobbis são games, animes e seriados, formado como Desenvolvedor Java fullstack pela Generation Brasil e Técnico em Automação industrial pela Etec Julio de Mesquita,conhecimento básico em ingles e sempre antenado e focando em aprender novas tecnologias.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardAbout' sx={{ maxWidth: 300 }}>
                    <CardActionArea href='https://github.com/gustavocardoso8' target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="300"
                            image="https://i.imgur.com/tzbfhLe.jpg"
                            alt="gu"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gustavo Cardoso
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                <p> Com 25 anos, resido em São Bernardo do Campo, SP. Sou apaixonado por tecnologia desde a infância, porém sem dinheiro para os estudos acabei descobrindo uma segunda paixão: ajudar pessoas, e me formei na área da saúde. Hoje, finalmente tendo as primeiras oportunidades, estou formado como Pessoa Desenvolvedora Fullstack Java Jr. pela Generation Brasil, além de estudar Ciência da Computação.
                                </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardAbout' sx={{ maxWidth: 300 }}>
                    <CardActionArea href='https://github.com/Maaahzin'  target='_blank' >
                        <CardMedia className="imageCard"
                            component="img"
                            height="mari"
                            image="https://i.imgur.com/BKfEjD7.jpg"
                            alt="onu6"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mariana Souza
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                <p> Me chamo Mariana Costa de Souza, tenho 30 anos, resido em São Bernardo.
                                    Sou Desenvolvedora Java Full Stack Jr. e estou em transição de carreira para área Tech.
                                    Tenho inglês básico.
                                </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardAbout' sx={{ maxWidth: 300 }}>
                    <CardActionArea href='https://github.com/nancidama'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="300"
                            image="https://i.imgur.com/gU3DqQY.jpg"
                            alt="nanci"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Nanci Damasceno
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                <p> Meu nome é Nanci, tenho 27 anos, sou casada e resido em Cotia-SP. Minha vida sempre foi dividida por 3 coisas que amo muito que é a moda, cantar e tecnologia. Atualmente trabalho na organização Sumup e sou formada pela Generation Brasil em Desenvolvedora Full Stack Java Jr.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className='cardAbout' sx={{ maxWidth: 300 }}>
                    <CardActionArea href='https://github.com/rafacruzz'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="300"
                            image="https://i.imgur.com/Np2Zdgr.jpg"
                            alt="rafa"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Rafaella Cruz
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                <p> Meus pronomes são Ela/Dela, tenho 22 anos, sou nascida e criada em São José dos Campos, São Paulo. Sou formada em Técnico em Administração e como desenvolvedora Full-Stack JAVA Jr, pela Generation Brasil, e tenho espanhol básico e inglês intermediário. Atualmente, trabalho na SumUp.
                                </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid >
    )
}

export default About;