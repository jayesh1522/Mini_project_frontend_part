import { Input } from "antd";
import "./index.css";

const { TextArea } = Input;

function DescField(props) {
  return (
    <div className="text-area">
      <TextArea
        size="large"
        autoSize={{ minRows: 3, maxRows: 6 }}
        placeholder={props.data.placeholder}
      />
    </div>
  );
}

export default DescField;
