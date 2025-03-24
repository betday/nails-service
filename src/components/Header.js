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
        padding: '20px',
        backgroundColor: '#F8BBD0',
        borderBottom: '1px solid #e0e0e0',
        fontFamily: '"Poppins", sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 10, 
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" className="header-content">
        
        <Grid item className="logo" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img src={require('../assets/img/Logo.png')} alt="Logo" width="50" />
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700', 
              color: '#E91E63',
              marginLeft: '10px',
              letterSpacing: '1px',
            }}
          >
            PINK
          </Typography>
        </Grid>

      
        <Grid item xs={12} md={6} className="navbar" sx={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            <ul className="nav-list" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginRight: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/') ? 'active' : ''}`}
                    sx={{
                      color: '#333',
                      backgroundColor: 'transparent',
                      borderRadius: '20px',
                      padding: '12px 25px',
                      fontSize: '16px',
                      fontWeight: '700', 
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      },
                      ...(isActive('/') && {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      }),
                    }}
                  >
                    Trang Chủ
                  </Button>
                </Link>
              </li>
              <li style={{ marginRight: '15px' }}>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/about') ? 'active' : ''}`}
                    sx={{
                      color: '#333',
                      backgroundColor: 'transparent',
                      borderRadius: '20px',
                      padding: '12px 25px',
                      fontSize: '16px',
                      fontWeight: '700', 
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      },
                      ...(isActive('/about') && {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      }),
                    }}
                  >
                    Giới Thiệu
                  </Button>
                </Link>
              </li>
              <li style={{ marginRight: '15px' }}>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`nav-button ${isActive('/services') ? 'active' : ''}`}
                    sx={{
                      color: '#333',
                      backgroundColor: 'transparent',
                      borderRadius: '20px',
                      padding: '12px 25px',
                      fontSize: '16px',
                      fontWeight: '700', 
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      },
                      ...(isActive('/services') && {
                        backgroundColor: '#E91E63',
                        color: '#fff',
                      }),
                    }}
                  >
                    Dịch Vụ
                  </Button>
                </Link>
              </li>
              {isLoggedIn && (
                <li style={{ marginRight: '15px' }}>
                  <Link to="/activities" style={{ textDecoration: 'none' }}>
                    <Button
                      className={`nav-button ${isActive('/activities') ? 'active' : ''}`}
                      sx={{
                        color: '#333',
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        padding: '12px 25px',
                        fontSize: '16px',
                        fontWeight: '700', 
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          backgroundColor: '#E91E63',
                          color: '#fff',
                        },
                        ...(isActive('/activities') && {
                          backgroundColor: '#E91E63',
                          color: '#fff',
                        }),
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

    
        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {isLoggedIn ? (
            <Box display="flex" alignItems="center" className="user-info">
              <Typography sx={{ color: '#fff', marginRight: '10px', fontSize: '14px', fontWeight: '700' }}>
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
                  fontSize: '14px',
                  fontWeight: '700', 
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
                fontWeight: '700', 
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
