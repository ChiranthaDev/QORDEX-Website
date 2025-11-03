import React, { useEffect } from 'react';
import './CursorAnimation.css';

const CursorAnimation = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    // Using the specified color palette
    const colors = [
      "#3DBE62", // Bright Green
      "#5C6C64", // Muted Gray-Green
      "#49C36A", // Light Green
      "#1F3C17", // Dark Forest Green
      "#1C1C1C", // Charcoal Black
      "#3DBE62", // Bright Green
      "#5C6C64", // Muted Gray-Green
      "#49C36A", // Light Green
      "#1F3C17", // Dark Forest Green
      "#1C1C1C", // Charcoal Black
      "#3DBE62", // Bright Green
      "#5C6C64", // Muted Gray-Green
      "#49C36A", // Light Green
      "#1F3C17", // Dark Forest Green
      "#1C1C1C", // Charcoal Black
      "#3DBE62", // Bright Green
      "#5C6C64", // Muted Gray-Green
      "#49C36A", // Light Green
      "#1F3C17", // Dark Forest Green
      "#1C1C1C", // Charcoal Black
      "#3DBE62", // Bright Green
      "#5C6C64"  // Muted Gray-Green
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div>
      {[...Array(22)].map((_, i) => (
        <div key={i} className="circle"></div>
      ))}
    </div>
  );
};

export default CursorAnimation;