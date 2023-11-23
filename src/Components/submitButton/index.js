import { Button } from "antd";
import "./index.css";

function SubmitButton(props) {
  return (
    <Button type="primary" shape="round" size="large" className="submit-btn">
      {props.children}
    </Button>
  );
}

export default SubmitButton;
