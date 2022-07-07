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

    const [essay, setEssay] = useState([]);
 
    async function fetchEssayById() {
        const essayId = document.getElementById('essayId').value;
        fetch('http://localhost:8080/essay/find/' + essayId, {
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            setEssay(response.items);
        })
        .catch(error => {
            console.log("Something went to wrong!");
        }); 
    };

    return (
        <React.Fragment>
        <ManagementHeader/>    
        <CssBaseline />
        <Container maxWidth="md">
            <Grid container spacing={2} >
                <Grid item xs={6}>     
                    <TextField id="essayId" label="ID" variant="standard" />
                    <Button variant="contained" size="medium" onClick={() => { fetchEssayById() }}>Search</Button>
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

            {
                essay === null ? null :
                <Grid item xs={4}>     
                    <TextField 
                        id="text-field-search-by-subject" 
                        value={essay[0].subject} 
                        label="Subject"
                        variant="outlined" 
                    /> 
                </Grid>   
            }    
            {
                essay === null ? null :
                <Grid item xs={4}>     
                    <TextField 
                        id="text-field-search-by-subject" 
                        value={essay[0].title} 
                        label="Title"
                        variant="outlined" 
                    /> 
                </Grid>   
            }
            {
                essay === null ? null :  
                <Grid item xs={7}>     
                <TextField 
                    sx={{ m: 0, width: '100ch' }}
                    id="outlined-multiline-static"
                    label="Multiline"
                    value={essay[0].content}
                    multiline
                    rows={10}
                    variant="outlined"
                />
                </Grid>
            }       
            </Grid> 
        </Container>
        </React.Fragment>
    );
}

export default ManagementSearchEssay;