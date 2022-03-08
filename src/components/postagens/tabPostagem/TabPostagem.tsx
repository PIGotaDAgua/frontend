import React, { useState } from 'react'
import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (

        <>
            <TabContext value={value} >
                <AppBar position="static" className='tabPanel'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" className='hover' />
                        <Tab label="Sobre nós" value="2" className='hover' />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre nós</Typography>
                    <Grid container>
                        <Grid alignItems="center" item xs={6}>
                            <img src="https://i.imgur.com/O0BGiXx.png" alt="" width="500px" height="500px" />
                        </Grid>
                        <Grid alignItems="center" item xs={6}>
                            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!A ordem dos tratores não altera o pão duris.Suco de cevadiss deixa as pessoas mais interessantis.Delegadis gente finis, bibendum egestas augue arcu ut est.                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Pra lá , depois divoltis porris, paradis.Aenean aliquam molestie leo, vitae iaculis nisl.                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Diuretics paradis num copo é motivis de denguis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!                                <br />
                                <br />
                                Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Diuretics paradis num copo é motivis de denguis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!                            </Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;