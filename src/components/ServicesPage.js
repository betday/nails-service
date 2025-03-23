import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom'; 
import '../assets/css/servicespage.css'; 

const ServicesPage = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = {
    camLe: {
      name: "Quận Cẩm Lệ",
      locations: [
        { id: "camle-1", name: "Nailroom Quang Trung", address: "20 Quang Trung, Hoàn Kiếm, Hà Nội", price: "200,000 VND", homeService: true },
        { id: "camle-2", name: "Nailroom Lê Văn Hiến", address: "105 Lê Văn Hiến, Cẩm Lệ, Đà Nẵng", price: "150,000 VND", homeService: false },
        { id: "camle-3", name: "Nail Salon Cẩm Lệ", address: "45 Phạm Văn Đồng, Cẩm Lệ, Đà Nẵng", price: "180,000 VND", homeService: true },
        { id: "camle-4", name: "Nail Stylist Minh Anh", address: "12 Hoàng Văn Thụ, Cẩm Lệ, Đà Nẵng", price: "220,000 VND", homeService: true },
        { id: "camle-5", name: "Nailroom Hồng Hà", address: "33 Hùng Vương, Cẩm Lệ, Đà Nẵng", price: "250,000 VND", homeService: false },
      ]
    },
    haiChau: {
      name: "Quận Hải Châu",
      locations: [
        { id: "haichau-1", name: "Nailroom Hoàng Minh Giám", address: "29 N7B Trung Hòa - Nhân Chính, Thanh Xuân, Hà Nội", price: "210,000 VND", homeService: false },
        { id: "haichau-2", name: "Hải Châu Nails", address: "23 Đường Duy Tân, Hải Châu, Đà Nẵng", price: "170,000 VND", homeService: true },
        { id: "haichau-3", name: "Nail Star Hải Châu", address: "91 Nguyễn Văn Linh, Hải Châu, Đà Nẵng", price: "190,000 VND", homeService: true },
        { id: "haichau-4", name: "Nailhouse Hoàng Anh", address: "10 Lê Duẩn, Hải Châu, Đà Nẵng", price: "230,000 VND", homeService: false },
        { id: "haichau-5", name: "Viva Nails Hải Châu", address: "56 Bạch Đằng, Hải Châu, Đà Nẵng", price: "260,000 VND", homeService: true },
      ]
    },
    lienChieu: {
      name: "Quận Liên Chiểu",
      locations: [
        { id: "lienchieu-1", name: "Nailroom Hoàng Ngân", address: "149 Hoàng Ngân, phường Trung Hòa, Cầu Giấy, Hà Nội", price: "220,000 VND", homeService: true },
        { id: "lienchieu-2", name: "Liên Chiểu Nails", address: "12 Nguyễn An Ninh, Liên Chiểu, Đà Nẵng", price: "190,000 VND", homeService: false },
        { id: "lienchieu-3", name: "Nail Tech Liên Chiểu", address: "88 Trường Chinh, Liên Chiểu, Đà Nẵng", price: "200,000 VND", homeService: true },
        { id: "lienchieu-4", name: "Liên Chiểu Nail Studio", address: "54 Âu Cơ, Liên Chiểu, Đà Nẵng", price: "210,000 VND", homeService: false },
        { id: "lienchieu-5", name: "Nail Style Liên Chiểu", address: "78 Nguyễn Tất Thành, Liên Chiểu, Đà Nẵng", price: "240,000 VND", homeService: true },
      ]
    },
    nguHanhSon: {
      name: "Quận Ngũ Hành Sơn",
      locations: [
        { id: "nguhanhson-1", name: "Nailroom Sơn Trà", address: "23 Sơn Trà, Ngũ Hành Sơn, Đà Nẵng", price: "200,000 VND", homeService: true },
        { id: "nguhanhson-2", name: "Sơn Trà Nails", address: "32 Nguyễn Tất Thành, Ngũ Hành Sơn, Đà Nẵng", price: "180,000 VND", homeService: false },
        { id: "nguhanhson-3", name: "Nail House Ngũ Hành Sơn", address: "56 Hòa Hải, Ngũ Hành Sơn, Đà Nẵng", price: "210,000 VND", homeService: true },
        { id: "nguhanhson-4", name: "Sơn Trà Nail Studio", address: "101 Đỗ Quang, Ngũ Hành Sơn, Đà Nẵng", price: "230,000 VND", homeService: false },
        { id: "nguhanhson-5", name: "Nailworld Ngũ Hành Sơn", address: "67 Trường Sa, Ngũ Hành Sơn, Đà Nẵng", price: "250,000 VND", homeService: true },
      ]
    },
    sonTra: {
      name: "Quận Sơn Trà",
      locations: [
        { id: "sontra-1", name: "Sơn Trà Nail Lounge", address: "22 Trường Sa, Sơn Trà, Đà Nẵng", price: "220,000 VND", homeService: false },
        { id: "sontra-2", name: "Nail Studio Sơn Trà", address: "8 Lê Quang Đạo, Sơn Trà, Đà Nẵng", price: "190,000 VND", homeService: true },
        { id: "sontra-3", name: "Sơn Trà Nails & Spa", address: "33 Hòa Quý, Sơn Trà, Đà Nẵng", price: "200,000 VND", homeService: true },
        { id: "sontra-4", name: "Sơn Trà Nail Bar", address: "66 Trần Phú, Sơn Trà, Đà Nẵng", price: "240,000 VND", homeService: false },
        { id: "sontra-5", name: "Sơn Trà Nail & Beauty", address: "77 Sơn Trà, Đà Nẵng", price: "250,000 VND", homeService: true },
      ]
    },
    thanhKhe: {
      name: "Quận Thanh Khê",
      locations: [
        { id: "thanhkhe-1", name: "Thanh Khê Nails", address: "20 Đống Đa, Thanh Khê, Đà Nẵng", price: "210,000 VND", homeService: true },
        { id: "thanhkhe-2", name: "Nailroom Thanh Khê", address: "10 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng", price: "180,000 VND", homeService: false },
        { id: "thanhkhe-3", name: "Nail Bar Thanh Khê", address: "45 Trường Chinh, Thanh Khê, Đà Nẵng", price: "190,000 VND", homeService: true },
        { id: "thanhkhe-4", name: "Thanh Khê Nail Art", address: "32 Hồ Tùng Mậu, Thanh Khê, Đà Nẵng", price: "200,000 VND", homeService: false },
        { id: "thanhkhe-5", name: "Nailhouse Thanh Khê", address: "99 Lê Đình Dương, Thanh Khê, Đà Nẵng", price: "220,000 VND", homeService: true },
      ]
    }
  };

 
  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box className="select-area">
        <Typography variant="h4" className="section-title" data-aos="fade-up">
          Lựa chọn khu vực
        </Typography>

        <Grid container spacing={2} justifyContent="center" data-aos="fade-up">
          {Object.keys(areas).map((areaKey) => (
            <Grid item key={areaKey}>
              <Button
                variant={selectedArea === areaKey ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleAreaClick(areaKey)}
                sx={{
                  textTransform: 'none',
                  padding: '10px 20px',
                  margin: '5px',
                  fontWeight: 'bold',
                  backgroundColor: selectedArea === areaKey ? '#E91E63' : 'white',
                  color: selectedArea === areaKey ? 'white' : '#E91E63',
                }}
              >
                {areas[areaKey].name}
              </Button>
            </Grid>
          ))}
        </Grid>

        {selectedArea && (
          <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography variant="h5">Các địa điểm tại {areas[selectedArea].name}</Typography>
            <Grid container spacing={4} sx={{ marginTop: '20px' }} justifyContent="center">
              {areas[selectedArea].locations.map((location, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box className="location-card">
                    <Typography variant="h6" className="location-title">{location.name}</Typography>
                    <Typography variant="body2" className="location-address">{location.address}</Typography>
                    <Chip
                      label={`Giá từ: ${location.price}`}
                      color="primary"
                      sx={{
                        marginTop: '10px',
                        fontWeight: 'bold',
                        backgroundColor: '#FFD700',
                        color: '#333',
                      }}
                    />
                    
                    {location.homeService && (
                      <Box sx={{
                        marginTop: '10px',
                        padding: '6px 12px',
                        backgroundColor: '#FFD700', 
                        color: '#333',
                        borderRadius: '15px',
                        fontWeight: '600',
                        fontSize: '14px',
                        display: 'inline-block',
                        textTransform: 'capitalize',
                        letterSpacing: '0.5px', 
                      }}>
                        Dịch vụ tại nhà
                      </Box>
                    )}
                    <Link to={`/location/${location.id}`}>
                      <Button className="button" sx={{ marginTop: '15px' }}>Xem chi tiết</Button>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>

      
    </div>
  );
};

export default ServicesPage;