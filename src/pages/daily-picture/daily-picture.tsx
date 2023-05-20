import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAPOD } from "../../services/apod-api";
import { IApod } from "../../services/apod-model";
import { IState } from "./model";
import {
  PayloadAction,
  addNewSlice,
  useSelector,
  useDispatch,
  getSliceAction,
  RootState,
} from "../../lib/redux";
import { Header } from "../../layouts";
import { DateContainer } from "../../components/date-container";
import "./daily-picture.css";

const initState: Record<string, string> = {
  copyright: "abc",
  date: "4-11-2022",
  media_type: "",
  explanation: "",
  hdurl: "",
  service_version: "",
  title: "",
  url: "",
};

const reducers: Record<string, any> = {
  updateData: (state: IApod, action: PayloadAction<IApod>) => {
    state.copyright = action.payload.copyright;
    state.date = action.payload.date;

    // return state;
  },
};

const DailyPicture: React.FC = () => {
  const apodSlice = addNewSlice("dailyState", initState, reducers);
  const apodSliceActions = getSliceAction(apodSlice);
  const day = useSelector((state: RootState) => state.dailyState);
  const dispatch = useDispatch();

  const saveData = (data: IApod): void => {
    dispatch(apodSliceActions.updateData(data));
  };

  const [apod, setApod] = useState<IApod | null | undefined>(undefined);
  useEffect(() => {
    // getAPOD()
    //   .then((respond) => {
    //     saveData(respond);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <>
      <Header />
      <section className='main-section'>
        <DateContainer />
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
