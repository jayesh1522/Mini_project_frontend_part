import { Input } from "antd";
import "./index.css";

function TextField(props) {
  return (
    <div className="text-field">
      <Input size="large" placeholder={props.data.placeholder} />
    </div>
  );
}

export default TextField;
