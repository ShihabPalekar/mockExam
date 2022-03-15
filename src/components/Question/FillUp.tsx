import { Button, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  handleQueAttempt: any;
};

const FillUp: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;

  const [ansInput, setAnsInput] = useState("");

  const handleInputChange = (e: any) => {
    setAnsInput(e.target.value);
  };

  const handleSubmit = () => {
    props.handleQueAttempt(queObj.id, ansInput);
  };


  return (
    <div>
      <h2>{queObj.que}</h2>
      <TextField
        id="standard-basic"
        label="Your answer"
        name="name"
        variant="standard"
        onChange={handleInputChange}
      />
      <div className="to-fro-btns">
        <Button
          disabled={props.currPage <= 0}
          variant="contained"
          onClick={props.prevQue}
        >
          Prev
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          {props.currPage < props.data.length - 1 ? "Submit" : "Finish test"}
        </Button>
        <Button
          disabled={props.currPage >= props.data.length - 1}
          variant="contained"
          onClick={props.nextQue}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FillUp;
