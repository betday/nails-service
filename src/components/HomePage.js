import React, { useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../assets/css/HomePage.css'; 
import NotificationDemo from "./NotificationDemo";
import { Link } from 'react-router-dom';


const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div>
     

 
      <Box className="banner">
      <Typography variant="h2" className="title">Dịch Vụ Làm Nails Chuyên Nghiệp</Typography>
      <Typography variant="h5" className="description">
        Đặt lịch ngay để trải nghiệm dịch vụ đẳng cấp tại nhà hoặc tiệm.
      </Typography>
      <Button 
        component={Link} 
        to="/services" 
        variant="contained" 
        color="secondary" 
        size="large"
      >
        Đặt lịch ngay
      </Button>
    </Box>

      <Box className="blog-section">
        <Typography variant="h4" className="section-title" data-aos="fade-up">BLOG PINK</Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }} data-aos="fade-up">
          <Grid item xs={12} sm={4}>
            <Box className="blog-card">
            <img src={require('../assets/img/gift.jpg')} alt="Blog Image 1" />
              <Typography variant="h6" className="card-title">TẢI APP NGAY – “SAY” VOUCHER</Typography>
              <Typography variant="body2" className="card-description">Chương trình khuyến mãi đặc biệt.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="blog-card">
            <img src={require('../assets/img/son.jpg')} alt="Blog Image 2" />
              <Typography variant="h6" className="card-title">SƠN MÓNG THUẦN CHAY – NHẬN NGAY DEAL HOT</Typography>
              <Typography variant="body2" className="card-description">Khám phá dịch vụ mới tại Pink Nails.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="blog-card">
            <img src={require('../assets/img/checkin.jpg')} alt="Blog Image 3" />
              <Typography variant="h6" className="card-title">VUI CHECK-IN RINH NAIL XIN</Typography>
              <Typography variant="body2" className="card-description">Chiết khấu 15% khi check-in tại tiệm.</Typography>
            </Box>
          </Grid>
        </Grid>

        
        <Box className="see-more-button">
          <Button component={Link} 
        to="/blog" 
        variant="contained" 
        color="secondary" 
        size="large"
          >Xem Thêm</Button>
        </Box>
      </Box>
      
      

      
      <Box className="nailroom-introduction">
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6}>
          <img src={require('../assets/img/slogan.jpg')} alt="NailRoom" className="nailroom-image" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className="nailroom-title">VỚI Pink Beauty Hub</Typography>
            <Typography variant="h5" className="nailroom-subtitle">"AI CŨNG CÓ THỂ TRỞ NÊN ĐẸP HƠN"</Typography>
            <Typography variant="body1" className="nailroom-description">
              Xuất phát là một hệ thống Nail tại Đà Nẵng, Pink Beauty Hub luôn đặt trọn vẹn trái tim & tâm huyết vào việc làm đẹp cho các nàng.
            </Typography>
            <Typography variant="body1" className="nailroom-description">
              Bởi thế, slogan của Pink là “Ai cũng có thể trở nên đẹp hơn”. Đến với Pink và ra về như những phụ nữ xinh đẹp hơn, hạnh phúc hơn là điều chúng mình hướng tới.
            </Typography>
            
            <Button component={Link} 
        to="/about" 
        variant="contained" 
        color="secondary" 
        size="large"
          >Giới Thiệu</Button>
            
          </Grid>
        </Grid>
      </Box>

      <Box className="achievements-section">
        <Typography variant="h4" className="section-title" data-aos="fade-up">THÀNH TỰU VÀ CÁC LỢI ÍCH</Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }} data-aos="fade-up">
          <Grid item xs={12} sm={4}>
            <Box className="achievement-card">
              <Typography variant="h6" className="card-title">Liên Kết Với Đối Tác Tốt</Typography>
              <Typography variant="body2" className="card-description">Chúng tôi tự hào xây dựng mạng lưới hợp tác bền vững với các tập đoàn, tổ chức và nhà cung cấp đạt chuẩn quốc tế. Mỗi đối tác đều trải qua quy trình tuyển chọn khắt khe về năng lực, kinh nghiệm và tiêu chuẩn đạo đức kinh doanh. Nhờ đó, khách hàng được tiếp cận giải pháp tối ưu với công nghệ tiên tiến nhất, đi kèm dịch vụ hỗ trợ 24/7 từ đội ngũ chuyên gia giàu kinh nghiệm.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="achievement-card">
              <Typography variant="h6" className="card-title">Điều Khoản Minh Bạch</Typography>
              <Typography variant="body2" className="card-description">Mọi thỏa thuận đều được thể hiện bằng văn bản rõ ràng với ngôn ngữ pháp lý dễ hiểu. Chúng tôi áp dụng cơ chế giải trình tự động, cho phép khách hàng theo dõi tiến độ dịch vụ theo thời gian thực. Cam kết không phát sinh chi phí ẩn, không điều khoản mập mờ - tất cả nhằm thiết lập niềm tin vững chắc ngay từ lần hợp tác đầu tiên.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="achievement-card">
              <Typography variant="h6" className="card-title">Chính Sách Bảo Hành</Typography>
              <Typography variant="body2" className="card-description">Hệ thống bảo hành linh hoạt được thiết kế theo từng phân khúc sản phẩm/dịch vụ, bao gồm:
✓ Bảo trì định kỳ miễn phí
✓ Hỗ trợ khẩn cấp trong 2 giờ làm việc
✓ Hoàn tiền 100% nếu không đạt cam kết ban đầu
✓ Gia hạn bảo hành lên đến 36 tháng cho khách hàng thân thiết</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <NotificationDemo />
    </div>
  );
};

export default HomePage;
