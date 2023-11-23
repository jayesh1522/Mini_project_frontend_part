import { Col, Row } from "antd";
import CheckBoxField from "../checkBox";
import DescField from "../descField";
import DropDownMenu from "../dropdownMenu";
import Rect from "../rectangle";
import SubmitButton from "../submitButton";
import TextField from "../textField";
import "./index.css";

function MedicalInfo(props) {
  return (
    <Rect>
      <div className="medical-info-div">
        <h1>Medicine {props.data.id}</h1>
        <TextField data={{ placeholder: "Medicine Name" }} />
        <DescField data={{ placeholder: "Description" }} />
        <h5>Prescription</h5>
        <DropDownMenu />
        <div className="check-box-group-main-div">
          <Row justify="space-between" className="check-box-group">
            <Col span={12}>
              <CheckBoxField data={{ label: "Before Breakfast" }} />
            </Col>
            <Col span={12}>
              <CheckBoxField data={{ label: "After Breakfast" }} />
            </Col>
          </Row>
          <Row justify="space-between" className="check-box-group">
            <Col span={12}>
              <CheckBoxField data={{ label: "Before Lunch" }} />
            </Col>
            <Col span={12}>
              <CheckBoxField data={{ label: "After Lunch" }} />
            </Col>
          </Row>
          <Row justify="space-between" className="check-box-group">
            <Col span={12}>
              <CheckBoxField data={{ label: "Before Dinner" }} />
            </Col>
            <Col span={12}>
              <CheckBoxField data={{ label: "After Dinner" }} />
            </Col>
          </Row>
        </div>
        <SubmitButton>Update</SubmitButton>
      </div>
    </Rect>
  );
}

export default MedicalInfo;
