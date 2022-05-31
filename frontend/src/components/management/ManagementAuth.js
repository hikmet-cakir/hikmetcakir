import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import FormControl from '@mui/material/FormControl'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';   
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import { useHistory } from "react-router-dom";

function ManagementAuth() {  
    const history = useHistory();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({
            ...values,
        showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
      
    async function hasAuthority() {
        fetch('http://localhost:8080/management/has-permission', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username:document.getElementById('input-with-icon-adornment').value,
                password:document.getElementById('standard-adornment-password').value
            })
        })
        .then(response => response.json())
        .then(response => {
            let hasPermission = response.resultStatus;
            hasPermission === "SUCCESS" ?  history.push("/management-home") : console.log("Log In Operation Fail");
        })
        .catch(error => {
            console.log("Something went to wrong!");
        }); 
    }; 

    return (
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '80vh' }}
                    >  
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="standard"> 
                        <Input
                            id="input-with-icon-adornment"
                            placeholder='Username'
                            startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            }
                        />  
                    </FormControl>     
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="standard"> 
                        <Input
                            id="standard-adornment-password"
                            placeholder='Password'
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password} 
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } 
                        />
                    </FormControl> 
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                        <Button variant="contained" size="medium" onClick={() => { hasAuthority() }}>
                            Log In
                        </Button>
                    </FormControl> 
                </Grid> 
            </Container>
        </React.Fragment>
      );
}

export default ManagementAuth;