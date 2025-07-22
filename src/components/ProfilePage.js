import React from "react";
import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfilePage = () => {
  const user = {
    name: "Nam Nguyen",
    email: "namnguyen@example.com",
    phone: "0123-456-789",
    loyaltyPoints: 120,
  };

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Paper
        sx={{
          maxWidth: 500,
          margin: "auto",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Avatar sx={{ bgcolor: "#e91e63", width: 80, height: 80, margin: "auto", mb: 2 }}>
          <AccountCircleIcon sx={{ fontSize: 60 }} />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#e91e63" }}>
          Thông tin cá nhân
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Tên:</strong> {user.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Email:</strong> {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>SDT:</strong> {user.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Điểm tích lũy:</strong> {user.loyaltyPoints}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
