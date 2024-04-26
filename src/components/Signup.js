import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    company: "",
    agency: 1,
  });
  const [data, setData] = useState([]);

  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleChangeAgency = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item, label) => ({
    checked: selectedValue === item,
    onChange: handleChangeAgency,
    value: item,
    name: "agency",
    inputProps: { "arial-label": item },
    label: label,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify([...data, user]));
    navigate("/profile");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 1,
        minHeight: "95dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "1.25em",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            color: "#1D2226",
            fontSize: "28px",
            fontWeight: "medium",
          }}
        >
          Create your
          <br />
          PopX account
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Full Name"
              name="name"
              placeholder="Enter name"
              InputLabelProps={{
                style: {
                  color: " #6C25FF",
                  fontSize: "13px",
                  fontWeight: "regular",
                },
                shrink: true,
              }}
              size="small"
              value={user.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="mobile"
              placeholder="Enter email address"
              InputLabelProps={{
                style: {
                  color: " #6C25FF",
                  fontSize: "13px",
                  fontWeight: "regular",
                },
                shrink: true,
              }}
              size="small"
              value={user.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email address"
              InputLabelProps={{
                style: {
                  color: " #6C25FF",
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
              required
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              InputLabelProps={{
                style: {
                  color: " #6C25FF",
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
            <TextField
              fullWidth
              variant="outlined"
              label="Company name"
              name="company"
              placeholder="Enter company name"
              InputLabelProps={{
                style: {
                  color: " #6C25FF",
                  fontSize: "13px",
                  fontWeight: "regular",
                },
                shrink: true,
              }}
              size="small"
              value={user.company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel
                required
                id="radio-buttons-group-label"
                sx={{
                  "&.MuiFormLabel-root": {
                    color: "#1D2226",
                    "&>.MuiFormLabel-asterisk": {
                      color: "#DD4A3D",
                    },
                  },
                  fontSize: "13px",
                  fontWeight: "regular",
                }}
              >
                Are you an Agency?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      {...controlProps("1", "Yes")}
                      sx={{
                        borderColor: "#919191",
                        "&.Mui-checked": {
                          color: "#6C25FF",
                          borderColor: "#642AF5",
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="0"
                  control={
                    <Radio
                      {...controlProps("0", "No")}
                      sx={{
                        borderColor: "#919191",
                        "&.Mui-checked": {
                          color: "#6C25FF",
                          borderColor: "#642AF5",
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mb: 2,
          fontSize: "16px",
          fontWeight: "medium",
          backgroundColor: "#6C25FF",
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "#6C25FF" },
        }}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default Signup;
