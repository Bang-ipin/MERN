import React from "react";
import { Container } from "reactstrap";
import { Gap,Links, Submit } from "../../components";
import { LockOutlinedIcon } from "../../components/childs/Icon";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  createTheme,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "../../components/childs/Material";
import "./login.scss";

const Login = () => {

  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <div className="main-page">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <Gap width={30} height={10} />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Gap width={30} height={10} />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Gap width={10} height={10} />
                <Submit
                  label="Sign In"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                />
                <Grid container>
                  <Grid item xs>
                    <Links title="Lupa Password" />
                  </Grid>
                  <Gap width={40} height={10} />
                  <Grid item>
                    <Links title="Belum punya Akun? Daftar" />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Login;
