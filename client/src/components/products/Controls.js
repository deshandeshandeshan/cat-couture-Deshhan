import "./Controls.css";
import { useState } from "react";

const Controls = ({ setLimit, limit }) => {
  const [selectValue, setSelectValue] = useState(limit);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectValue(selectedValue);
    setLimit(selectedValue);
  };
  return (
    <div className="limitControls padding">
      <p className="limitHeader padding">Product limit</p>
      <select
        className="controlsSelect"
        value={selectValue}
        onChange={handleSelect}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Controls;
