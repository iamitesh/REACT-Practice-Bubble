import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", background: "#e0e0e0", borderRadius: "10px", overflow: "hidden", paddingnLeft:'10px' }}>
      <div
        style={{
          width: `${progress}%`,
          background: "#4caf50",
          height: "20px",
          textAlign: "center",
          color: "white",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
