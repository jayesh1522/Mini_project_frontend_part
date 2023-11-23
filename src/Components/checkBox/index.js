import { Checkbox } from "antd";
import "./index.css";

function CheckBoxField(props) {
  return (
    <div className="check-box-class">
      <Checkbox>
        <span className="check-box-label">{props.data.label}</span>
      </Checkbox>
    </div>
  );
}

export default CheckBoxField;
