import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    const { email, password } = user;

    if (storedUser && storedUser.length) {
      const parsedUser = JSON.parse(storedUser);
      const userLogin = parsedUser.filter((n, i) => {
        return n.email === email && n.password === password;
      });
      if (userLogin.length === 0) {
        alert("Invalid email or password");
      } else {
        localStorage.setItem("user", JSON.stringify(userLogin));
        navigate("/profile");
      }
    }
  };

  return (
    <Box component="section" sx={{ mt: 1, p: "1.25em" }}>
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          color: "#1D2226",
          fontSize: "28px",
          fontWeight: "medium",
        }}
      >
        Signin to your
        <br />
        PopX account
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#1D2226",
          fontSize: "18px",
          fontWeight: "regular",
          opacity: 0.6,
        }}
      >
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipisicing elit,
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email address"
              InputLabelProps={{
                style: {
                  color: "#6C25FF",
                  fontSize: "13px",
                  fontWeight: "regular",
                },
                shrink: true,
              }}
              size="small"
              value={user.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              InputLabelProps={{
                style: {
                  color: "#6C25FF",
                  fontSize: "13px",
                  fontWeight: "regular",
                },
                shrink: true,
              }}
              size="small"
              value={user.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "medium",
                backgroundColor: "#CBCBCB",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#CBCBCB" },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
