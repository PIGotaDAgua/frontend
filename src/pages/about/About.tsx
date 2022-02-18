import React from 'react';
import { Grid, Box } from '@material-ui/core';
import './About.css';

function About() {
    return (
    <Grid container direction="row" justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
                <h1> Quem somos </h1>
                <br />
                <br />
                <section>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Leite de capivaris, leite de mula manquis sem cabeça.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        <br />
                        Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Casamentiss faiz malandris se pirulitá.Quem manda na minha terra sou euzis!Pra lá , depois divoltis porris, paradis.
                        <br />
                        Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!Copo furadis é disculpa de bebadis, arcu quam euismod magna.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
                        <br />
                        <br />
                    </p>
                    <Grid xs={6} className='imagem' ></Grid>
                </section>
            </Box>
        </Grid>
    </Grid >
    ) }

export default About;