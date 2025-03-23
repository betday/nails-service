import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Select, MenuItem, FormControl, InputLabel, Avatar, Checkbox, ListItemText, TextField, Box, InputAdornment, IconButton, Switch, FormControlLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../assets/css/BookAppointmentPage.css';

const BookAppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { locationName, locationAddress, serviceName, serviceImage, homeService } = location.state || {};

  // Initial state
  const [date, setDate] = useState(new Date());
  const [technicians, setTechnicians] = useState(['']);
  const [selectedTime, setSelectedTime] = useState('');
  const [services, setServices] = useState([serviceName || '']);
  const [notes, setNotes] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isHomeService, setIsHomeService] = useState(homeService || false); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [numAttending, setNumAttending] = useState(1);

  const technicianList = [
    { name: "Kỹ Thuật Viên 1", image: "/path/to/technician1.jpg" },
    { name: "Kỹ Thuật Viên 2", image: "/path/to/technician2.jpg" },
    { name: "Kỹ Thuật Viên 3", image: "/path/to/technician3.jpg" },
  ];

  const times = [
    { time: "09:00", status: "available" },
    { time: "10:00", status: "available" },
    { time: "11:00", status: "available" },
    { time: "12:00", status: "full" },
    { time: "13:00", status: "full" },
    { time: "14:00", status: "full" },
    { time: "15:00", status: "available" },
    { time: "16:00", status: "available" },
    { time: "17:00", status: "available" },
    { time: "18:00", status: "available" },
    { time: "19:00", status: "available" },
    { time: "20:00", status: "available" },
  ];

  const availableServices = [
    { name: "Bộ Sản Phẩm", duration: "30 phút", price: "138,000 ₫" },
    { name: "Callus Removal", duration: "30 phút", price: "250,000 ₫" },
    { name: "Nối Mi - Kiểu Classic", duration: "60 phút", price: "250,000 ₫" },
    { name: "Nối Mi - Kiểu Kylie", duration: "70 phút", price: "330,000 ₫" },
    { name: "Uốn Mi", duration: "40 phút", price: "220,000 ₫" },
  ];

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const getAvailableTimesForSelectedDate = () => {
    const todayString = today.toISOString().split('T')[0];
    const selectedDateString = date.toISOString().split('T')[0];
    const currentTime = today.getHours() + today.getMinutes() / 60;

    if (selectedDateString === todayString) {
      return times.filter((time) => {
        const timeHour = parseInt(time.time.split(":")[0]);
        const timeMinutes = parseInt(time.time.split(":")[1]);
        const timeInHours = timeHour + timeMinutes / 60;

        return timeInHours >= currentTime && time.status === 'available';
      });
    } else if (date <= nextWeek) {
      return times;
    } else {
      return [];
    }
  };

  useEffect(() => {
    setAvailableTimes(getAvailableTimesForSelectedDate());
  }, [date]);

  useEffect(() => {
    if (date && fullName && selectedTime && services.length > 0) {
      setIsButtonEnabled(true); 
    } else {
      setIsButtonEnabled(false); 
    }
  }, [date, fullName, selectedTime, services]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTechnicianChange = (event, index) => {
    const updatedTechnicians = [...technicians];
    updatedTechnicians[index] = event.target.value;
    setTechnicians(updatedTechnicians);
  };

  const handleTimeChange = (time) => {
    if (time.status === "available") {
      setSelectedTime(time.time);
    }
  };

  const handleServiceChange = (event, index) => {
    const updatedServices = [...services];
    updatedServices[index] = event.target.value;
    setServices(updatedServices);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleNumAttendingChange = (action) => {
    setNumAttending(prev => {
      const newNum = action === 'increase' ? prev + 1 : prev - 1;
      setTechnicians(Array(newNum).fill(''));
      setServices(Array(newNum).fill([]));
      return newNum;
    });
  };

  const handleConfirmAppointment = () => {
    const bookingData = {
      fullName,
      date: date.toLocaleDateString(),
      time: selectedTime,
      services: services.join(', '),
      technicians: technicians.join(', '),
      notes,
      location: locationName , 
      isHomeService,
    };

    alert("Bạn đang trong thời gian giữ chỗ, vui lòng thanh toán trong 10 phút!");
    navigate("/payment", { state: { bookingData } });
  };

  return (
    <div className="book-appointment-page">

      <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f3f0f5', marginTop: '100px'  }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Đặt lịch tại   {locationName}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '10px' }}>
          Địa chỉ: {locationAddress}
        </Typography>

        <FormControlLabel
          control={<Switch checked={isHomeService} onChange={() => setIsHomeService(prev => !prev)} />}
          label={isHomeService ? "Chọn Dịch Vụ Tại Nhà" : "Chọn Dịch Vụ Tại Tiệm"}
        />
      </Box>


      <div className="form-group">
        <Typography variant="h6">Please enter your full name</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
              <Grid item>
                <Typography variant="h6">Number of attending</Typography>
              </Grid>

              <Grid item>
                <IconButton 
                  onClick={() => handleNumAttendingChange('decrease')} 
                  disabled={numAttending <= 1} 
                  sx={{
                    backgroundColor: '#f2f2f2',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                    borderRadius: '50%',
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }} >
                  {numAttending}
                </Typography>
              </Grid>

              <Grid item>
                <IconButton 
                  onClick={() => handleNumAttendingChange('increase')} 
                  sx={{
                    backgroundColor: '#f2f2f2',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                    borderRadius: '50%',
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="form-group">
        <Typography variant="h6">Ngày hẹn:</Typography>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          inline
          minDate={today}
          maxDate={nextWeek}
        />
      </div>

      <div className="form-group">
        <Typography variant="h6">Chọn Kỹ Thuật Viên</Typography>
        {Array.from({ length: numAttending }).map((_, index) => (
          <FormControl fullWidth key={index}>
            <InputLabel>Chọn Kỹ Thuật Viên {index + 1}</InputLabel>
            <Select
              value={technicians[index] || ''}
              onChange={(event) => handleTechnicianChange(event, index)}
              label={`Chọn Kỹ Thuật Viên ${index + 1}`}
            >
              {technicianList.map((tech, techIndex) => (
                <MenuItem value={tech.name} key={techIndex}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar alt={tech.name} src={tech.image} style={{ marginRight: '10px' }} />
                    </Grid>
                    <Grid item>{tech.name}</Grid>
                  </Grid>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>

      <div className="form-group">
        <Typography variant="h6">Chọn Giờ:</Typography>
        <Grid container spacing={2}>
          {availableTimes.map((time, index) => (
            <Grid item xs={2} key={index}>
              <Button
                variant="outlined"
                onClick={() => handleTimeChange(time)} 
                disabled={time.status === 'full'}
                className={`time-btn ${time.status === 'available' ? (selectedTime === time.time ? 'time-btn available selected' : 'time-btn available') : 'time-btn full'}`}
              >
                {time.time}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="form-group">
        <Typography variant="h6">Chọn Dịch Vụ</Typography>
        {Array.from({ length: numAttending }).map((_, index) => (
          <FormControl fullWidth key={index}>
            <InputLabel>Chọn Dịch Vụ {index + 1}</InputLabel>
            <Select
              multiple
              value={services[index] || []} 
              onChange={(event) => handleServiceChange(event, index)}
              label={`Chọn Dịch Vụ ${index + 1}`}
              renderValue={(selected) => selected.join(', ')}
            >
              {availableServices.map((service, serviceIndex) => (
                <MenuItem value={service.name} key={serviceIndex}>
                  <Checkbox checked={services[index] && services[index].indexOf(service.name) > -1} />
                  <ListItemText primary={service.name} secondary={`${service.duration} - ${service.price}`} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>

      <div className="form-group">
        <TextField
          fullWidth
          label="Ghi chú"
          multiline
          rows={4}
          value={notes}
          onChange={handleNotesChange}
          variant="outlined"
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        className="confirm-btn"
        disabled={!isButtonEnabled}
        onClick={handleConfirmAppointment} 
      >
        Xác Nhận Đặt Lịch
      </Button>
    </div>
  );
};

export default BookAppointmentPage;
