import React from "react";
import Tick from "./Tick";

const WeekendSchedule = () => {
  return (
    <div>
      <Tick play="산책" money={30000} />
      <Tick play="바닷가" money={50000} />
    </div>
  );
};

export default WeekendSchedule;
