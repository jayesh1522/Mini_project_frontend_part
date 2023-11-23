import { Select } from "antd";
import "./index.css";

const { Option } = Select;

function DropDownMenu() {
  return (
    <div className="drop-down-menu-class">
      <h7>Repeat</h7>
      <div className="select-class">
        <Select size="large" placeholder="Repeat daily">
          <Option>Daily</Option>
          <Option>Alternate</Option>
        </Select>
      </div>
    </div>
  );
}

export default DropDownMenu;
