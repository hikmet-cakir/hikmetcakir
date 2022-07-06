import React from 'react';
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';    
import Grid from '@mui/material/Grid';  
import TextField from '@mui/material/TextField';  
import Button from '@mui/material/Button';
import ManagementHeader from "../../layouts/ManagementHeader";

function ManagementDeleteEssay() {
    return (
        <React.Fragment>
            <ManagementHeader/>    
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={7}>     
                        <TextField  
                            id="text-field-search-by-subject" 
                            label="Essay ID"
                            type="number" 
                            variant="outlined" 
                        /> 
                    </Grid> 
                    <Grid item xs={7}>      
                        <Button variant="contained" size="medium">DELETE</Button>
                    </Grid> 
                </Grid> 
            </Container>
        </React.Fragment>
    );
}

export default ManagementDeleteEssay;