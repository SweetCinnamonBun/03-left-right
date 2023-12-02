import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div className="message">the app is used by pressing the buttons</div>
    );
  }
  return (
    <div className="history">
      <p>button press history: {props.allClicks.join(" ")}</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = (props) => <div className="display">{props.value}</div>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div className="container">
      <h1>Left-Right</h1>
      <div className="container2">
        <p>{left}</p>
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        <p>{right}</p>
      </div>

      <History allClicks={allClicks} />
      <Display value={value} />
      <div className="container3">
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
    </div>
  );
};
export default App;
