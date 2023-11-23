import { DatePicker } from "antd";
import "./index.css";

function DateField(props) {
  return (
    <div className="date-field">
      <DatePicker placeholder={props.data.placeholder} size="large" />
    </div>
  );
}

export default DateField;
