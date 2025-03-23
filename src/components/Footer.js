import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'; 

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F8BBD0', 
        color: 'white', 
        paddingTop: '40px',
        paddingBottom: '20px',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Công Ty ABC
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              Điện thoại: 123-456-7890
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@abc.com" sx={{ color: '#E91E63' }}>info@abc.com</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Liên Kết
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>Trang Chủ</Link></li>
              <li><Link href="/about" sx={{ color: 'white', textDecoration: 'none' }}>Giới Thiệu</Link></li>
              <li><Link href="/services" sx={{ color: 'white', textDecoration: 'none' }}>Dịch Vụ</Link></li>
              <li><Link href="/contact" sx={{ color: 'white', textDecoration: 'none' }}>Liên Hệ</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Kết Nối Với Chúng Tôi
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            © {new Date().getFullYear()} Công Ty ABC. Tất cả quyền được bảo lưu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
