import DateField from "../../dateField";
import TextField from "../../textField";
import TimeField from "../../timeField";
import SubmitButton from "../../submitButton";
import "./index.css";

function UserInfoContent() {
  return (
    <div className="user-info-content-div">
      <TextField data={{ placeholder: "Name" }} />
      <TextField data={{ placeholder: "Email" }} />
      <DateField data={{ placeholder: "Date of Birth" }} />
      <h6 className="user-info-subhead">Timings</h6>
      <TimeField data={{ placeholder: "Wake Time" }} />
      <TimeField data={{ placeholder: "Sleep Time" }} />
      <TimeField data={{ placeholder: "Breakfast Time" }} />
      <TimeField data={{ placeholder: "Lunch Time" }} />
      <TimeField data={{ placeholder: "Dinner Time" }} />
      <SubmitButton>Update</SubmitButton>
    </div>
  );
}

export default UserInfoContent;
