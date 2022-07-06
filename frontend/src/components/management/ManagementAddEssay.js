import React from 'react';
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';    
import Grid from '@mui/material/Grid';  
import TextField from '@mui/material/TextField';  
import Button from '@mui/material/Button';
import ManagementHeader from "../../layouts/ManagementHeader";
 

function ManagementAddEssay() {

    return (
        <React.Fragment>
            <ManagementHeader/>    
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={7}>     
                        <TextField 
                            id="text-field-search-by-subject" 
                            label="Title" 
                            variant="outlined" /> 
                    </Grid> 
                    <Grid item xs={7}>     
                        <TextField 
                            sx={{ m: 0, width: '100ch' }}
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={10}
                            variant="outlined"
                        />
                    </Grid> 
                    <Grid item xs={7}>      
                        <Button variant="contained" size="medium" >Send</Button>
                    </Grid> 
                </Grid> 
            </Container>
        </React.Fragment>
    );
}

export default ManagementAddEssay;