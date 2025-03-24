import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import '../assets/css/Payment.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return <Typography variant="h5">No booking data found.</Typography>;
  }


  const availableServices = [
    { name: "Cắt móng", price: "138,000 ₫" },
    { name: "Sơn", price: "250,000 ₫" },
    { name: "Móng giả - Kiểu Classic", price: "250,000 ₫" },
    { name: "Móng giả - Kiểu Kylie", price: "330,000 ₫" },
    { name: "Đính đá", price: "220,000 ₫" },
  ];

 
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const servicesList = bookingData.services.split(',').map(service => service.trim());

    console.log("Selected Services:", servicesList);

    servicesList.forEach(service => {
      const foundService = availableServices.find(s => s.name.toLowerCase() === service.toLowerCase());

      if (foundService) {
        const price = foundService.price.replace(/[^\d.-]/g, '');  
        console.log(`Service: ${service}, Price: ${price}`);
        totalPrice += parseFloat(price);  
      }
    });

    console.log("Total Price Calculated:", totalPrice);
    return totalPrice;
  };

  const saveBookingDataToLocalStorage = () => {
    const existingHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
    existingHistory.push(bookingData);
    localStorage.setItem('bookingHistory', JSON.stringify(existingHistory));
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  };

 
  const handlePaymentConfirmation = () => {
    saveBookingDataToLocalStorage();
    navigate('/activities'); 
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '120px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginTop: '80px' }}>
        Thanh Toán Đặt Lịch
      </Typography>

      <Typography variant="h6" gutterBottom>
        Bạn đang trong thời gian giữ chỗ. Vui lòng thanh toán trong 10 phút.
      </Typography>


      <Box sx={{ marginTop: '20px' }}>
        <QRCodeCanvas
          value="https://www.example.com/payment-link"
          size={256}
          level="H"
        />
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h6">Quét mã QR để hoàn tất thanh toán</Typography>
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePaymentConfirmation}
        >
          Xác Nhận Thanh Toán
        </Button>
      </Box>

      <Box sx={{ marginTop: '40px' }} className="booking-info-container">
        <Typography className="booking-info-header">
          Thông Tin Đặt Lịch:
        </Typography>

        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Dịch vụ:</strong></div>
          <div className="booking-info-value">{bookingData.services}</div>
        </div>
        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Ngày:</strong></div>
          <div className="booking-info-value">{bookingData.date}</div>
        </div>
        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Giờ:</strong></div>
          <div className="booking-info-value">{bookingData.time}</div>
        </div>
        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Địa điểm:</strong></div>
          <div className="booking-info-value">{bookingData.location}</div>
        </div>
        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Kỹ thuật viên:</strong></div>
          <div className="booking-info-value">{bookingData.technicians}</div>
        </div>
        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Ghi chú:</strong></div>
          <div className="booking-info-value">{bookingData.notes}</div>
        </div>

        <div className="booking-info-row">
          <div className="booking-info-label"><strong>Tổng Giá:</strong></div>
          <div className="booking-info-value">{calculateTotalPrice().toLocaleString()} ₫</div>
        </div>

        <div className="booking-info-divider"></div>
      </Box>
    </Box>
  );
};

export default PaymentPage;
