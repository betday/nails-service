import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext'; 

const Header = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const { isLoggedIn, user, logout } = useAuth(); 

 
  const isActive = (path) => location.pathname === path;

  
  const handleLoginClick = () => {
    navigate('/login'); 
  };


  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <Box 
      className="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#E91E63',
        zIndex: 1000,
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item className="logo">
          <img src={require('../assets/img/Logo.png')} alt="Logo" width="50" />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>PINK</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button 
                    className="button" 
                    sx={{
                      fontWeight: isActive('/') ? 'bold' : 'normal',
                      color: isActive('/') ? '#E91E63' : 'inherit',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Trang Chủ
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Button 
                    className="button" 
                    sx={{
                      fontWeight: isActive('/about') ? 'bold' : 'normal',
                      color: isActive('/about') ? '#E91E63' : 'inherit',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Giới Thiệu
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <Button 
                    className="button" 
                    sx={{
                      fontWeight: isActive('/services') ? 'bold' : 'normal',
                      color: isActive('/services') ? '#E91E63' : 'inherit',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Dịch Vụ
                  </Button>
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="/activities" style={{ textDecoration: 'none' }}>
                    <Button
                      className="button"
                      sx={{
                        fontWeight: isActive('/activities') ? 'bold' : 'normal',
                        color: isActive('/activities') ? '#E91E63' : 'inherit',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      Hoạt Động Của Bạn
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </Grid>
        <Grid item>
          {isLoggedIn ? (
            <Box display="flex" alignItems="center">
              <Typography sx={{ color: '#fff', marginRight: '10px' }}>{user.email}</Typography>
              <IconButton sx={{ color: '#fff' }} onClick={() => navigate('/profile')}>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLogout}
                sx={{
                  marginLeft: '10px',
                  borderRadius: '20px',
                  textTransform: 'none',
                }}
              >
                Đăng xuất
              </Button>
            </Box>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
              sx={{
                textTransform: 'none',
                backgroundColor: '#E91E63',
                padding: '10px 20px',
                borderRadius: '30px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#D81B60',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-2px)',
                },
                '&:active': {
                  transform: 'translateY(2px)',
                }
              }}
            >
              Đăng Nhập
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
