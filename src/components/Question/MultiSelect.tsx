import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  handleQueAttempt: any;
};

const MultiSelect: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;

  return (
    <div>
      <h2>{queObj.que}</h2>
      <div>
        <p>Select all valid options</p>
        <div>
          {queObj.options.map((i: any) => {
            return (
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label={i} />
              </FormGroup>
            );
          })}
        </div>
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

export default MultiSelect;
