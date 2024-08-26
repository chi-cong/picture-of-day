import React, { useEffect, useRef } from "react";
// services
import { getAPOD } from "../../services/apod-api";
import { IApod } from "../../services/apod-model";
// types, interfaces
import { IState } from "./model";
import { IDateForm } from "./daily-picture-model";
// libraries
import {
  PayloadAction,
  addNewSlice,
  useSelector,
  useDispatch,
  getSliceAction,
  RootState,
} from "../../lib/redux";
import { Toaster, showErrorToast } from "../../lib/react-hot-toast";
import { Header } from "../../layouts";
import { useForm, Controller, SubmitHandler } from "../../lib/react-hook-form";
import { useNavigate, Outlet } from "../../lib/react-router";
import { Link } from "../../lib/react-router";
import { dateHandler, Dayjs } from "../../lib/dayjs";
// components
import { SharedDatePicker } from "../../components/share-date-picker";
import { SharedButton } from "../../components/shared-button";
// others
import "./daily-picture.css";

const initState: IState = {
  apiState: {
    copyright: "",
    date: "",
    media_type: "",
    explanation: "",
    hdurl: "",
    service_version: "",
    title: "",
    url: "",
  },
};

const reducers: Record<string, any> = {
  updateData: (state: any, action: PayloadAction<IState>) => {
    state.apiState = action.payload.apiState;
  },
};

const DailyPicture: React.FC = () => {
  // redux
  const apodSlice = addNewSlice<IState>("dailyState", initState, reducers);
  const apodSliceActions = getSliceAction(apodSlice);
  const dailyState: IState = useSelector(
    (state: RootState) => state.dailyState
  );
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<IDateForm>();
  const formRef = useRef<any>(null);

  // save api data
  const saveData = (data: IApod): void => {
    dispatch(apodSliceActions.updateData({ apiState: data }));
  };

  const callApodApi = (dateQuery?: string) => {
    getAPOD(dateQuery ? dateQuery : "")
      .then((respond) => {
        // get data and navigate to child route
        saveData(respond);
        navigate(`/daily-picture/${dailyState.apiState.date}`);
      })
      .catch(() => {
        showErrorToast("there's an error, please try again");
      });
  };

  // add navigator
  const navigate = useNavigate();
  const submitDate: SubmitHandler<IDateForm> = (data, e) => {
    e?.preventDefault();
    const dateString = `${data.date.year()}-${data.date.month()}-${data.date.day()}`;
    callApodApi(dateString);
  };

  useEffect(() => {
    callApodApi();
  }, []);

  return (
    <>
      <Toaster />
      <h1>{}</h1>
      <Header title='astronomy picture of day' />
      <section className='main-section'>
        <form
          ref={formRef}
          className='date-form'
          onSubmit={handleSubmit(submitDate)}
        >
          <Controller
            control={control}
            name='date'
            render={({ field: { onChange, value } }) => (
              <SharedDatePicker
                currDate={dailyState.apiState.date}
                format='YYYY-MM-DD'
                onChange={onChange}
                value={value}
              />
            )}
          />
          <SharedButton htmlType={"submit"} type='primary'>
            Change date
          </SharedButton>
        </form>
        <Outlet />
        <Link to={"/"}>
          <SharedButton type='primary'>Go back to home</SharedButton>
        </Link>
      </section>
    </>
  );
};

export default DailyPicture;
