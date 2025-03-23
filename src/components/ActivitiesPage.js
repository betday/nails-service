import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import '../assets/css/ActivitiesPage.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: theme.palette.background.default,
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
    const bookingDateTime = dayjs(`${bookingDate}T${bookingTime}:00`); 
    
    const timeDifference = currentTime.diff(bookingDateTime, 'minute'); 

    console.log('Current Time:', currentTime.format());
    console.log('Booking DateTime:', bookingDateTime.format());
    console.log('Time Difference (minutes):', timeDifference);

    if (timeDifference < 0) {
      return 'Chờ đợi'; 
    } else if (timeDifference >= 0 && timeDifference <= 60) {
      return 'Đang tiến hành dịch vụ'; 
    } else {
      return 'Đã hoàn thành'; 
    }
  };

  useEffect(() => {
   
    const savedHistoryData = JSON.parse(localStorage.getItem('bookingHistory')) || [];
    setHistoryData(savedHistoryData);
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress size={60} sx={{ display: 'block', margin: 'auto', marginTop: '50px' }} />;
  }

  return (
    <Box sx={{ padding: '20px' }}>
     
      <Typography
  variant="h5"
  sx={{
    marginTop: '120px', 
    marginBottom: '40px', 
    fontWeight: 'bold',
    fontSize: '28px',
    textAlign: 'center', 
  }}
>
  Lịch Sử Đặt Lịch
</Typography>

      {historyData.length > 0 ? (
        historyData.map((historyItem, index) => {
          const status = checkStatus(historyItem.time, historyItem.date);
          return (
            <StyledPaper key={index} className="activity-card">
              <Typography variant="h6" gutterBottom sx={{ color: '#e91e63', fontSize: '20px' }}>
                Đặt Lịch {index + 1}
              </Typography>
              <Typography variant="body1"><strong>Dịch vụ:</strong> {historyItem.services}</Typography>
              <Typography variant="body1"><strong>Ngày:</strong> {historyItem.date}</Typography>
              <Typography variant="body1"><strong>Giờ:</strong> {historyItem.time}</Typography>
              <Typography variant="body1"><strong>Địa điểm:</strong> {historyItem.location}</Typography>
              <Typography variant="body1"><strong>Kỹ thuật viên:</strong> {historyItem.technicians}</Typography>
              <Typography variant="body1"><strong>Ghi chú:</strong> {historyItem.notes}</Typography>

              <div className={`status ${status === 'Chờ đợi' ? 'waiting' : status === 'Đang tiến hành dịch vụ' ? 'in-progress' : 'completed'}`}>
                {status}
              </div>
            </StyledPaper>
          );
        })
      ) : (
        <Typography variant="body1">Không có lịch sử đặt lịch.</Typography>
      )}
    </Box>
  );
};

export default ActivitiesPage;
