import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type Props = {
  queObj: any;
};

const MCQ: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;

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
            // onChange={handleInputChange}
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
      </div>
    </div>
  );
};

export default MCQ;
