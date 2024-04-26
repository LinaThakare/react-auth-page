import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/signup");
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <Box
      component="section"
      sx={{
        height: "95dvh",
        p: "1.25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#1D2226",
          fontSize: "28px",
          fontWeight: "medium",
        }}
      >
        Welcome to PopX
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#1D2226",
          fontSize: "18px",
          fontWeight: "regular",
          opacity: "60%",
        }}
      >
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipisicing elit,
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 3,
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: "medium",
          backgroundColor: "#6C25FF",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#6C25FF",
          },
        }}
        onClick={navigateRegister}
      >
        Create Account
      </Button>
      <Button
        variant="contained"
        sx={{
          mt: 1,
          mb: 2,
          color: "#1D2226",
          fontSize: "16px",
          fontWeight: "medium",
          backgroundColor: "#6C25FF4B",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#6C25FF4B",
          },
        }}
        onClick={navigateLogin}
      >
        Already Registered? Login
      </Button>
    </Box>
  );
};

export default Home;
