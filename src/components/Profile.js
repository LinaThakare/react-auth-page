import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material";
import ProfileIcon from "../assets/Ellipse 114.png";
import CameraIcon from "../assets/Group1585.svg";

const Profile = () => {
  const storedUser = localStorage.getItem("user");
  const users = JSON.parse(storedUser);
  const user = users[0];
  const name = user.name;
  const email = user.email;

  const SmallAvatar = styled(Avatar)(() => ({
    width: "21px",
    height: "23px",
  }));

  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            minHeight: "68px",
            display: "flex",
            alignItems: "center",
            pl: 2,
          }}
        >
          <Typography
            variant="body2"
            component="h6"
            sx={{
              color: "#1D2226",
              fontSize: "18px",
              fontWeight: "regular",
              textTransform: "capitalize",
            }}
          >
            Account Settings
          </Typography>
        </Box>
        <Box sx={{ p: "1.25em", borderBottom: "dashed 1px #CBCBCB" }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<SmallAvatar src={CameraIcon} />}
            >
              <Avatar
                src={ProfileIcon}
                sx={{ width: "76px", height: "76px" }}
              />
            </Badge>
            <Box>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#1D2226",
                  fontSize: "15px",
                  fontWeight: "medium",
                  textTransform: "capitalize",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#1D2226",
                  fontSize: "14px",
                  fontWeight: "regular",
                  textTransform: "capitalize",
                }}
              >
                {email}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            component="div"
            sx={{
              mt: 3,
              color: "#1D2226",
              fontSize: "14px",
              fontWeight: "regular",
              textTransform: "capitalize",
            }}
          >
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "dashed 1px #CBCBCB",
          height: "25px",
        }}
      ></Box>
    </Box>
  );
};

export default Profile;
