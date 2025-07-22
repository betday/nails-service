import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    toast.success("Gửi tin nhắn thành công!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4, color: "#e91e63" }}>
        Liên Hệ Với Chúng Tôi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, textAlign: "center", backgroundColor: "#ffe6eb" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Thông Tin Liên Hệ</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>Địa chỉ: FPT, Ngũ Hành Sơn, Đà Nẵng</Typography>
            <Typography variant="body1">Điện thoại: 123-456-7890</Typography>
            <Typography variant="body1">Email: pink@gmail.com</Typography>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: "#fff0f5" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Tên của bạn"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Tin nhắn"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#d81b60" } }}>
                Gửi
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default ContactPage;
