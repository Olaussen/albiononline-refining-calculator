import React from "react";
import { LOCATIONS } from "../data";

type RefiningLocationProps = {
  updateLocation: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const RefiningLocation: React.FC<RefiningLocationProps> = ({
  updateLocation,
}) => {
  return (
    <div>
      <label htmlFor="refining-location">Return rate</label>
      <select id="refining-station-return-rate" onChange={updateLocation}>
        <>
          {Object.entries(LOCATIONS).map((entry) => (
            <option value={entry[0]}>{`${entry[0]} (${entry[1]}%)`}</option>
          ))}
        </>
      </select>
    </div>
  );
};

export default RefiningLocation;
