import "./Controls.css";

const Controls = () => {
  return (
    <div className="controls">
      <p>Product limit</p>
      <select className="controlsSelect">
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
};

export default Controls;
