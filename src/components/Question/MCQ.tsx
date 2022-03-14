import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  selectedAns: any;
};

const MCQ: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;
  const [selected, setSelected] = useState("");

  const handleInputChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h2>{queObj.que}</h2>
      <div>
        <FormControl className="mcq-options-wrapper">
          <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="mcq"
            className="mcq-options"
            // value={values.gender}
            onChange={handleInputChange}
          >
            {queObj.options.map((option: string) => {
              return (
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <div className="to-fro-btns">
          {props.currPage > 0 && (
            <Button variant="contained" onClick={props.prevQue}>
              Prev question
            </Button>
          )}
          <Button variant="contained" onClick={props.nextQue}>
            {props.currPage < props.data.length - 1
              ? "Next question"
              : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
