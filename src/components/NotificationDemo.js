import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

const NotificationDemo = () => {
  useEffect(() => {
    const bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    const now = dayjs();

    bookingHistory.forEach((booking) => {
      const appointmentTime = dayjs(`${booking.date} ${booking.time}`);
      const diffHours = appointmentTime.diff(now, "hour", true);

      if (diffHours > 0 && diffHours <= 24) {
        toast.info(
          `Reminder: Your appointment for "${booking.service}" is in ${Math.round(
            diffHours
          )} hours!`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      }
    });
  }, []);

  return <ToastContainer />;
};

export default NotificationDemo;
