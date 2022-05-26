import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'; 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 1000,
    color: theme.palette.text.primary,
  }));

  const message = `Truncation should be conditionally applicable on this long line of text
  as this is a much longer line than what the container can support. `;

function JavaSE() {
    return (
       <div>
        <React.Fragment>
            <CssBaseline />
            <Container fixed> 
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                    <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
                        <Grid container wrap="nowrap" spacing={4}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                        </Grid>
                </StyledPaper> 
                </Box> 
            </Container>
        </React.Fragment>
       </div>
    );
}

export default JavaSE;