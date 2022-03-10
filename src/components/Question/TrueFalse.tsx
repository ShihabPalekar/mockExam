import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

type Props = {
  queObj: any;
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
    </div>
  );
};

export default TrueFalse;
