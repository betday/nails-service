import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Grid, Chip } from '@mui/material';
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/ActivitiesPage.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: '10px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const ActivitiesPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const checkStatus = (bookingTime, bookingDate) => {
    const currentTime = dayjs();
    const bookingDateTime = dayjs(`${bookingDate} ${bookingTime}`);
    const timeDifference = currentTime.diff(bookingDateTime, 'minute');

    if (timeDifference < 0) {
      return 'Đang chờ';
    } else if (timeDifference >= 0 && timeDifference <= 60) {
      return 'Đang tiến hành dịch vụ';
    } else {
      return 'Đã hoàn thành';
    }
  };

  const handleCancel = (id, index) => {
    const updatedHistory = historyData.filter((booking, i) => {
      return !(booking.id === id && i === index);
    });
    setHistoryData(updatedHistory);
    localStorage.setItem('bookingHistory', JSON.stringify(updatedHistory));

    toast.success('Hủy đặt lịch thành công!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  useEffect(() => {
    const savedHistoryData = JSON.parse(localStorage.getItem('bookingHistory')) || [];

    const updatedHistory = savedHistoryData.map((booking, index) => {
      if (!booking.id) {
        return { ...booking, id: Date.now() + index };
      }
      return booking;
    });

    if (JSON.stringify(savedHistoryData) !== JSON.stringify(updatedHistory)) {
      localStorage.setItem('bookingHistory', JSON.stringify(updatedHistory));
    }

    setHistoryData(updatedHistory);
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress size={60} sx={{ display: 'block', margin: 'auto', marginTop: '50px' }} />;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Lịch Sử Đặt Lịch
      </Typography>

      {historyData.length > 0 ? (
        historyData.map((historyItem, index) => {
          const status = checkStatus(historyItem.time, historyItem.date);
          let statusColor = '';

          if (status === 'Đang chờ') {
            statusColor = 'green';
          } else if (status === 'Đang tiến hành dịch vụ') {
            statusColor = '#ADD8E6';
          } else if (status === 'Đã hoàn thành') {
            statusColor = '#E91E63';
          }

          return (
            <StyledPaper key={historyItem.id || index} className="activity-card">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e91e63' }}>
                    Đặt Lịch {index + 1}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Chip
                    label={status}
                    sx={{
                      fontWeight: 'bold',
                      backgroundColor: statusColor,
                      color: 'white',
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Dịch vụ:</strong> {historyItem.services}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Ngày:</strong> {historyItem.date}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Giờ:</strong> {historyItem.time}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Địa điểm:</strong> {historyItem.location}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Địa chỉ:</strong> {historyItem.address || 'Không có'}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Kỹ thuật viên:</strong> {historyItem.technicians}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body1"><strong>Ghi chú:</strong> {historyItem.notes}</Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <button
                    onClick={() => handleCancel(historyItem.id, index)}
                    style={{
                      backgroundColor: '#ff4d4d',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '10px',
                    }}
                  >
                    Hủy Đặt Lịch
                  </button>
                </Grid>
              </Grid>
            </StyledPaper>
          );
        })
      ) : (
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
          Bạn chưa có lịch sử đặt lịch nào.
        </Typography>
      )}

      <ToastContainer />
    </Box>
  );
};

export default ActivitiesPage;




