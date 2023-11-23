import { TimePicker } from "antd";
import "./index.css";
function TimeField(props) {
  return (
    <div className="time-field-class">
      <h7>{props.data.placeholder}</h7>
      <TimePicker size="large" placeholder={props.data.placeholder} />
    </div>
  );
}

export default TimeField;
