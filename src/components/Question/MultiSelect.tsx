import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

type Props = {
  queObj: any;
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
    </div>
  );
};

export default MultiSelect;
