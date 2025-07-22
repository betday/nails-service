import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffb6c1',
        color: '#333',
        padding: '40px 20px',
        marginTop: '40px',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Brand Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 2 }}>
            PINK
          </Typography>
          <Typography variant="body2">Địa chỉ: FPT, Ngũ Hành Sơn, Đà Nẵng.</Typography>
          <Typography variant="body2">Điện thoại: 123-456-7890</Typography>
          <Typography variant="body2">
            Email: <Link href="mailto:pink@gmail.com" sx={{ color: '#333' }}>pink@gmail.com</Link>
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 2 }}>
            Liên Kết
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" sx={{ color: '#333', textDecoration: 'none', '&:hover': { color: '#e91e63' } }}>Trang Chủ</Link>
            <Link href="/about" sx={{ color: '#333', textDecoration: 'none', '&:hover': { color: '#e91e63' } }}>Giới Thiệu</Link>
            <Link href="/services" sx={{ color: '#333', textDecoration: 'none', '&:hover': { color: '#e91e63' } }}>Dịch Vụ</Link>
            <Link href="/contact" sx={{ color: '#333', textDecoration: 'none', '&:hover': { color: '#e91e63' } }}>Liên Hệ</Link>
            <Link href="/blog" sx={{ color: '#333', textDecoration: 'none', '&:hover': { color: '#e91e63' } }}>Blog</Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 2 }}>
            Kết Nối Với Chúng Tôi
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#333', '&:hover': { color: '#e91e63' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#333', '&:hover': { color: '#e91e63' } }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#333', '&:hover': { color: '#e91e63' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#333', '&:hover': { color: '#e91e63' } }}>
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
        © {new Date().getFullYear()} Pink. Tất cả quyền được bảo lưu.
      </Typography>
    </Box>
  );
};

export default Footer;
