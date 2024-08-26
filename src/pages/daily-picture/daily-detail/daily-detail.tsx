import React from "react";
import { RootState, useSelector } from "../../../lib/redux";
import { IState } from "../model";
import { MediaTypes } from "../../../services/apod-model";
import SharedImg from "../../../components/shared-Image/shared-image";
import { SharedCard } from "../../../components/card";
import "./daily-detail.css";

const DailyDetail: React.FC = () => {
  const dailyState: IState = useSelector(
    (state: RootState) => state.dailyState
  );

  return (
    <div className='main-content'>
      <div className='picture'>
        {dailyState.apiState.media_type === MediaTypes.Image && (
          <SharedImg src={dailyState.apiState.url} />
        )}
        {dailyState.apiState.media_type === MediaTypes.Video && (
          <iframe src={dailyState.apiState.url} allow='fullscreen' />
        )}
      </div>
      <div className='explanation'>
        <SharedCard title={dailyState.apiState.title}>
          {dailyState.apiState.explanation}
        </SharedCard>
      </div>
    </div>
  );
};

export default DailyDetail;
