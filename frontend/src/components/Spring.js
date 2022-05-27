import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Header from '../layouts/Header' 

function Spring() {
    const [essaySpring, setEssaySpring] = useState([]); 

    useEffect(() => { fetchEssaysAboutSpring() }, []);

    async function fetchEssaysAboutSpring() {
        fetch('http://localhost:8080/essay/find/category/spring', {
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            setEssaySpring(response.items);
        })
        .catch(error => {
            console.log("Something went to wrong!");
        }); 
    };

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 1000,
        color: theme.palette.text.primary,
    }));

    return (
        <React.Fragment>
            <Header/>
            <CssBaseline />
            <Container fixed>
                {
                    essaySpring.length === 0 ? null : 
                        essaySpring[0].map(essay => (
                            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                                <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
                                    <Grid container wrap="nowrap" spacing={4}>
                                    <Grid item>
                                        <Avatar>W</Avatar>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>{essay.title}</Typography>
                                    </Grid>
                                    <Grid item xs zeroMinWidth> 
                                        <Link href={`/essay/${essay.id}`} underline="hover">
                                            Go to Essay
                                        </Link>
                                    </Grid>
                                    </Grid>
                                </StyledPaper> 
                            </Box> 
                        )) 
                }
            </Container>
        </React.Fragment> 
    );
}

export default Spring;