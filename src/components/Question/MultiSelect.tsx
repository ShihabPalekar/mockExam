import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  selectedAns: any;
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
        {props.currPage > 0 && (
          <Button variant="contained" onClick={props.prevQue}>
            Prev question
          </Button>
        )}
        <Button variant="contained" onClick={props.nextQue}>
          {props.currPage < props.data.length - 1 ? "Next question" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default MultiSelect;
