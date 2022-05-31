import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';    
import Grid from '@mui/material/Grid';  
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker"; 
import ManagementHeader from "../../layouts/ManagementHeader";
 

import "react-datepicker/dist/react-datepicker.css";

function ManagementSearchEssay() { 

    const [startDate, setStartDate] = useState(new Date());

    return (
        <React.Fragment>
        <ManagementHeader/>    
        <CssBaseline />
        <Container maxWidth="md">
            <Grid container spacing={2} >
                <Grid item xs={6}>     
                    <TextField id="text-field-search-by-id" label="ID" variant="standard" />
                    <Button variant="contained" size="medium">Search</Button>
                </Grid> 
                <Grid item xs={6}>     
                    <TextField id="text-field-search-by-subject" label="Subject" variant="standard" />
                    <Button variant="contained" size="medium" >Search</Button>
                </Grid>
                <Grid item xs={6}>     
                    <TextField id="text-field-search-by-content" label="Content" variant="standard" />
                    <Button variant="contained" size="medium" >Search</Button>
                </Grid> 
                <Grid item xs={3}>     
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" size="medium">Search</Button> 
                </Grid>  
            </Grid> 
        </Container>
        </React.Fragment>
    );
}

export default ManagementSearchEssay;