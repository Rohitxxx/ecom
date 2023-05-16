import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

export const Signup = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box
       sx={{
        boxShadow:3,
        borderRadius:2,
        px:4,
        py:6,
        marginTop:8,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}
      >
        <Typography variant="h4">SIGN UP</Typography>
          
          <Box component="form" sx={{mt:1}}>
            <TextField fullwidth margin="normal" label="First Name" id="first name" name="First name" required /><br />
            <TextField fullWidth margin="normal" label="Last Name"  id="Lastt name" name="Last name"  required /> <br />
            <TextField fullWidth margin="normal" label="Email"   id="Email Address" name="email" required /> <br />
            <TextField fullWidth margin="normal" label="Password" id="password" name="password"required/>
          </Box>
          <Button variant="contained" href="#contained-buttons">
  SIGNUP
</Button>
<Grid item >
    <Link to='/create user account'>create new account</Link>
</Grid>
        
      </Box>
    </Container>
  );
};
