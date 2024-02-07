"use client";
import { useEffect, useState } from "react";

type Prop = {
  date: Date;
};
const CountdownTimer = ({ date }: Prop) => {
  // Set your target date (year, month (0-11), day, hour, minute, second)
  const targetDate = new Date(date).getTime(); // Replace with your target date

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {timeLeft.days !== undefined ? (
        <div>
          <p>Remaining Reserved Time:-</p>
          <p>
            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
            minutes, {timeLeft.seconds} seconds
          </p>
        </div>
      ) : (
        <p>Reserved Time completed!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
