import { CheckBox } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button, Container, FormControlLabel, Grid,TextField,Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Sign in</Typography>
        <Box component="form" 
        sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<CheckBox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
          <LoginIcon/>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={'/forgot password'}>
                Forgot password
              </Link>
            </Grid>
            <Grid item>
              <Link to="./SignUp">
              {"Don't have an account?"}SignUp
              </Link>               
              {/* fghjk */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Login;