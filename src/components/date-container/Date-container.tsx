import React from "react";
import { DatePicker } from "antd";
import "./date-container.css";

export const DateContainer: React.FC = () => {
  const date = "date: 04/02/22";
  return (
    <div className='date-container'>
      <div className='date-item date'>
        <p>{date}</p>
      </div>
      <div className='date-item'>
        <DatePicker></DatePicker>
      </div>
    </div>
  );
};
