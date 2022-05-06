import {HistorySliderControls} from "./HistorySliderControls"
import {HistoryTop} from "./HistoryTop"
import {SwiperList} from "./SwiperList"

import './history.css';

const History = (props) => {
  const {historyData} = props;
  const {title, desc} = historyData;

  return (
    <div className="history">
      <HistoryTop info={{title, desc}}/>
      <div className="history__slider-list">
        <SwiperList sliderList={historyData.sliderList}/>
      </div> 
      <HistorySliderControls/>
    </div>    
  )
}

export {History}