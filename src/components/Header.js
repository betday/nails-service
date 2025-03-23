import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext';
import '../assets/css/Header.css';

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
    <Box className="header">
      <Grid container justifyContent="space-between" alignItems="center" className="header-content">
      <Grid item className="logo">
  <img src={require('../assets/img/Logo.png')} alt="Logo" width="50" />
  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E91E63' }}>PINK</Typography>
</Grid>


        <Grid item xs={12} md={6} className="navbar">
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/') ? 'active' : ''}`}
                  >
                    Trang Chủ
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/about') ? 'active' : ''}`}
                  >
                    Giới Thiệu
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/services') ? 'active' : ''}`}
                  >
                    Dịch Vụ
                  </Button>
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="/activities" style={{ textDecoration: 'none' }}>
                    <Button
                      className={`nav-button ${isActive('/activities') ? 'active' : ''}`}
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
            <Box display="flex" alignItems="center" className="user-info">
              <Typography sx={{ color: '#fff', marginRight: '10px' }}>
                {user.email}
              </Typography>
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
                  '&:hover': {
                    backgroundColor: '#D81B60',
                    borderColor: '#D81B60',
                    color: '#fff',
                  },
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
                padding: '12px 24px',
                borderRadius: '30px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                },
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
