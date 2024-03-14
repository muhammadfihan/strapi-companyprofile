import React, { useState, useEffect } from "react";

const TimeConverter = ({ seconds }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.round(seconds % 60);

    setTime({ hours, minutes, seconds: remainingSeconds });
  }, [seconds]);

  return (
    <div>
      {time.hours > 0 && <span>{time.hours} j </span>}
      {time.minutes > 0 && <span>{time.minutes} m </span>}
      {time.seconds > 0 && <span>{time.seconds} d</span>}
      {time.seconds == 0 && <span>{time.seconds} d</span>}
    </div>
  );
};

export default TimeConverter;
