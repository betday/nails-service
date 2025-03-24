import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

 
  const mockAccounts = [
    { email: 'c@gmail.com', password: '123' },
    { email: 'admin@example.com', password: 'admin123' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const account = mockAccounts.find(acc => acc.email === email && acc.password === password);
    
    if (account) {
      login(account); 
      navigate('/'); 
    } else {
      setErrorMessage('Thông tin đăng nhập không đúng');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#F7F1F1' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '30px 40px', borderRadius: '12px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Đăng nhập
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mt={2}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Mật khẩu"
                type="password"
                variant="outlined"
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mt={3}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Đăng nhập
              </Button>
            </Box>
          </form>
          {errorMessage && (
            <Box mt={2} color="red" textAlign="center">
              <Typography variant="body2">{errorMessage}</Typography>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
