import React, { useState, useEffect } from 'react';
import './Fireworks.css';

const Fireworks = ({ onFinish }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const difference = midnight - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      onFinish();
    }
  }, [timeLeft, onFinish]);

  useEffect(() => {
    const container = document.getElementById('firework-container');

    function createFirework() {
      const firework = document.createElement('div');
      firework.classList.add('firework');

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const colors = ['white', 'yellow', 'red', 'orange', 'pink', 'blue', 'green'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;
      firework.style.background = `radial-gradient(circle, ${randomColor} 40%, transparent 70%)`;
      firework.style.boxShadow = `0 0 30px ${randomColor}, 0 0 60px ${randomColor}`;

      container.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 2000);
    }

    const interval = setInterval(createFirework, 300);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="firework-container">
      <div className="overlay">
        <h1>We are launching our Northnine website!</h1>
        <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
        <h3>
          Countdown to Launch: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h3>
      </div>
    </div>
  );
};

export default Fireworks;
