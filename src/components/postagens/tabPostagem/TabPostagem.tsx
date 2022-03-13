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
                    </Grid>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;