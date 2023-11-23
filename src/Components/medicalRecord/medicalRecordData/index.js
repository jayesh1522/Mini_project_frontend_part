import { Collapse, DatePicker, Form } from "antd";
import "./index.css";
import MedicalPanel from "./medicalRecordPanel";

const { Panel } = Collapse;
function MedicalRecordData() {
  return (
    <div className="medical-record-content-div">
      <Form>
        <Form.Item>
          <DatePicker size="large" />
        </Form.Item>
      </Form>

      <Collapse
        expandIconPosition="right"
        ghost
        className="medical-record-collapse-class"
      >
        <Panel
          header={<span className="collapse-panel-header">Medicine 1</span>}
          expandIconPosition="right"
        >
          <MedicalPanel />
        </Panel>
      </Collapse>
    </div>
  );
}

export default MedicalRecordData;
