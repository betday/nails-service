import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { Box, Typography, Button, Chip, Grid, Paper } from '@mui/material'; 
import songel from '../assets/img/songel.png';  
import mongup from '../assets/img/mongup.png';
import thaomong from '../assets/img/thaomong.png';

const LocationDetailPage = () => {
    const { id } = useParams();
    const areas = {
      camLe: {
        name: "Quận Cẩm Lệ",
        locations: [
          { 
            id: "camle-1", 
            name: "Nailroom Quang Trung", 
            address: "20 Quang Trung, Cẩm Lệ, Đà Nẵng", 
            price: "200,000 VND", 
            description: "Full service nail salon, offering gel nails and spa treatments.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: songel },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: mongup },
              { name: "THÁO MÓNG - PHÁ SƠN", image: thaomong }
            ],
            homeService: true
          },
          { 
            id: "camle-2", 
            name: "Nailroom Lê Văn Hiến", 
            address: "105 Lê Văn Hiến, Cẩm Lệ, Đà Nẵng", 
            price: "150,000 VND", 
            description: "Nail designs and polish for every occasion.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: false
          },
          { 
            id: "camle-3", 
            name: "Nail Salon Cẩm Lệ", 
            address: "45 Phạm Văn Đồng, Cẩm Lệ, Đà Nẵng", 
            price: "180,000 VND", 
            description: "Nail salon offering traditional and modern designs.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "camle-4", 
            name: "Nail Stylist Minh Anh", 
            address: "12 Hoàng Văn Thụ, Cẩm Lệ, Đà Nẵng", 
            price: "220,000 VND", 
            description: "Expert nail stylist with personalized service.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "camle-5", 
            name: "Nailroom Hồng Hà", 
            address: "33 Hùng Vương, Cẩm Lệ, Đà Nẵng", 
            price: "250,000 VND", 
            description: "Premium nail care and beauty services.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: false
          }
        ]
      },
      haiChau: {
        name: "Quận Hải Châu",
        locations: [
          { 
            id: "haichau-1", 
            name: "Nailroom Hoàng Minh Giám", 
            address: "29 N7B Trung Hòa - Nhân Chính, Thanh Xuân, Hà Nội", 
            price: "210,000 VND", 
            description: "High-end nail salon with professional nail care.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "haichau-2", 
            name: "Hải Châu Nails", 
            address: "23 Đường Duy Tân, Hải Châu, Đà Nẵng", 
            price: "170,000 VND", 
            description: "Affordable nail care with quick and stylish results.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "haichau-3", 
            name: "Nail Star Hải Châu", 
            address: "91 Nguyễn Văn Linh, Hải Châu, Đà Nẵng", 
            price: "190,000 VND", 
            description: "Nail styling and beauty services for all occasions.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "haichau-4", 
            name: "Nailhouse Hoàng Anh", 
            address: "10 Lê Duẩn, Hải Châu, Đà Nẵng", 
            price: "230,000 VND", 
            description: "Modern and luxurious nail salon with a wide variety of services.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "haichau-5", 
            name: "Viva Nails Hải Châu", 
            address: "56 Bạch Đằng, Hải Châu, Đà Nẵng", 
            price: "260,000 VND", 
            description: "A trendy spot for all nail art lovers.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          }
        ]
      },
      lienChieu: {
        name: "Quận Liên Chiểu",
        locations: [
          { 
            id: "lienchieu-1", 
            name: "Nailroom Hoàng Ngân", 
            address: "149 Hoàng Ngân, phường Trung Hòa, Cầu Giấy, Hà Nội", 
            price: "220,000 VND", 
            description: "Nail care salon with a relaxing ambiance.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "lienchieu-2", 
            name: "Liên Chiểu Nails", 
            address: "12 Nguyễn An Ninh, Liên Chiểu, Đà Nẵng", 
            price: "190,000 VND", 
            description: "Offering a variety of nail services at competitive prices.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "lienchieu-3", 
            name: "Nail Tech Liên Chiểu", 
            address: "88 Trường Chinh, Liên Chiểu, Đà Nẵng", 
            price: "200,000 VND", 
            description: "Specializing in professional nail care services.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "lienchieu-4", 
            name: "Liên Chiểu Nail Studio", 
            address: "54 Âu Cơ, Liên Chiểu, Đà Nẵng", 
            price: "210,000 VND", 
            description: "Beautiful nail art and spa services.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "lienchieu-5", 
            name: "Nail Style Liên Chiểu", 
            address: "78 Nguyễn Tất Thành, Liên Chiểu, Đà Nẵng", 
            price: "240,000 VND", 
            description: "Trendy nail designs and rejuvenating treatments.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          }
        ]
      },
      thanhKhe: {
        name: "Quận Thanh Khê",
        locations: [
          { 
            id: "thanhkhe-1", 
            name: "Thanh Khê Nails", 
            address: "20 Đống Đa, Thanh Khê, Đà Nẵng", 
            price: "210,000 VND", 
            description: "Nail care services for all ages and occasions.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "thanhkhe-2", 
            name: "Nailroom Thanh Khê", 
            address: "10 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng", 
            price: "180,000 VND", 
            description: "A comfortable spot for all nail care needs.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "thanhkhe-3", 
            name: "Nail Bar Thanh Khê", 
            address: "45 Trường Chinh, Thanh Khê, Đà Nẵng", 
            price: "190,000 VND", 
            description: "Enjoy our nail bar while getting your nails done.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "thanhkhe-4", 
            name: "Thanh Khê Nail Art", 
            address: "32 Hồ Tùng Mậu, Thanh Khê, Đà Nẵng", 
            price: "200,000 VND", 
            description: "Creative nail art services with custom designs.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          },
          { 
            id: "thanhkhe-5", 
            name: "Nailhouse Thanh Khê", 
            address: "99 Lê Đình Dương, Thanh Khê, Đà Nẵng", 
            price: "220,000 VND", 
            description: "A professional nail studio with elegant nail designs.",
            services: [
              { name: "NHẶT DA - SƠN GEL", image: "/images/nhat-da-son-gel.jpg" },
              { name: "MÓNG ÚP - MÓNG BỘT - MÓNG GEL", image: "/images/mong-up-bot-gel.jpg" },
              { name: "THÁO MÓNG - PHÁ SƠN", image: "/images/thao-mong-pha-son.jpg" }
            ],
            homeService: true
          }
        ]
      }
    };
  

 let selectedLocation = null;
 for (let areaKey in areas) {
     selectedLocation = areas[areaKey].locations.find(location => location.id === id);
     if (selectedLocation) break;
 }


 if (!selectedLocation) {
     return <Typography variant="h5">Location not found</Typography>;
 }

 return (
     <div>
        
         <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', marginTop: '120px' }}>
             <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                 {selectedLocation.name}
             </Typography>
             <Typography variant="h6" sx={{ marginTop: '10px' }}>
                 {selectedLocation.address}
             </Typography>
             <Typography variant="body1" sx={{ marginTop: '20px' }}>
                 {selectedLocation.description}
             </Typography>

           
             {selectedLocation.homeService && (
                 <Typography variant="body2" sx={{ color: '#f44336', marginTop: '10px', fontStyle: 'italic' }}>
                     Dịch Vụ Tại Nhà Available! Liên hệ để biết thêm chi tiết.
                 </Typography>
             )}
         </Box>

       
         <Box sx={{ padding: '20px', backgroundColor: '#fff', marginTop: '20px' }}>
             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                 Dịch Vụ tại {selectedLocation.name}
             </Typography>
             <Grid container spacing={3} sx={{ marginTop: '20px' }}>
                 {selectedLocation.services.map((service, index) => (
                     <Grid item xs={12} sm={6} md={4} key={index}>
                         <Link
                             to={{
                                 pathname: `/book-appointment`,
                                 state: {
                                     locationName: selectedLocation.name,
                                     locationAddress: selectedLocation.address,
                                     serviceName: service.name,
                                     serviceImage: service.image,
                                     homeService: selectedLocation.homeService 
                                 }
                             }}
                             style={{ textDecoration: 'none' }}
                         >
                             <Paper
                                 elevation={3}
                                 sx={{
                                     padding: '20px',
                                     textAlign: 'center',
                                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                     '&:hover': {
                                         transform: 'scale(1.05)',
                                         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                     }
                                 }}
                             >
                                 <img
                                     src={service.image}
                                     alt={service.name}
                                     style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                 />
                                 <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                                     {service.name}
                                 </Typography>
                             </Paper>
                         </Link>
                     </Grid>
                 ))}
             </Grid>
         </Box>
     </div>
 );
};

export default LocationDetailPage;