import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Header from '../layouts/Header' 

function AboutMe() {
    return (
        <React.Fragment>
          <Header/>
          <CssBaseline />
          <Container maxWidth="md" sx={{padding:'103px'}}>
            <Box sx={{ backgroundColor: '#2196f3', borderRadius: '16px' }}> 
                <Grid container sx={{padding:'10px'}}> 
                    <Grid item xs={12}>
                        <h1>About Me</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar sx={{ width: 256, height: 256 }} src="./ProfilAvatar.png" /> 
                    </Grid>
                    <Grid item xs={8}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Grid>
                </Grid>
            </Box>
          </Container>
        </React.Fragment>
    );
}

export default AboutMe;