import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css"; // Sesuaikan dengan tema yang Anda inginkan

const DashboardDatePicker = () => {
  useEffect(() => {
    const date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const defaultDate = `${date.getUTCFullYear()}-${
      date.getUTCMonth() + 1
    }-${date.getUTCDate()}`;

    const flatpickrOptions = {
      inline: true,
      prevArrow: '<span title="Previous month">&laquo;</span>',
      nextArrow: '<span title="Next month">&raquo;</span>',
      defaultDate: defaultDate,
    };

    const dateTimePicker = document.getElementById("datetimepicker-dashboard");
    flatpickr(dateTimePicker, flatpickrOptions);

    // return () => {
    //   // Hapus flatpickr instance saat komponen dibongkar
    //   // @ts-ignore
    //   dateTimePicker._flatpicker.destroy();
    // };
  }, []); // Dependensi kosong, sehingga efek ini hanya berjalan sekali setelah mount

  return <div id="datetimepicker-dashboard"></div>;
};

export default DashboardDatePicker;
