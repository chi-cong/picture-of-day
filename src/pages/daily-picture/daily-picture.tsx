import React from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import "./daily-picture.css";

const DailyPicture: React.FC = () => {
  return (
    <>
      <h1>daily picture</h1>
      <section className='main-section'>
        <div className='date-container'>
          <div className='date-item date'>
            <p>Date : 4/11/2022</p>
          </div>
          <div className='date-item'>
            <DatePicker></DatePicker>
          </div>
        </div>
        <div className='main-content'>
          <div className='picture'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              sunt itaque sint quaerat rerum alias delectus minus explicabo ea
              tenetur hic fugit, beatae commodi voluptatibus illo! Amet officia
              fugit maiores.
            </p>
          </div>
          <div className='detail'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              possimus eaque fuga obcaecati ullam eius in quas, repudiandae est
              architecto quaerat ea, recusandae magnam reiciendis itaque optio
              aspernatur excepturi corporis?
            </p>
          </div>
        </div>
        <Link to={"/"}>Back to home</Link>
      </section>
    </>
  );
};

export default DailyPicture;
