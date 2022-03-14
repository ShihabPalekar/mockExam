import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  handleQueAttempt: any;
};

const TrueFalse: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;

  return (
    <div>
      <h2>{queObj.que}</h2>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="true-false"
            //   value={values.gender}
            //   onChange={handleInputChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="to-fro-btns">
        <Button
          disabled={props.currPage <= 0}
          variant="contained"
          onClick={props.prevQue}
        >
          Prev
        </Button>
        <Button variant="contained">
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

export default TrueFalse;
