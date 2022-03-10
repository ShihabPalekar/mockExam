import { TextField } from "@mui/material";

type Props = {
  queObj: any;
};

const FillUp: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;

  return (
    <div>
      <h2>{queObj.que}</h2>
      <TextField
        id="standard-basic"
        label="Your answer"
        name="name"
        variant="standard"
        // onChange={handleInputChange}
        // value={values.name}
      />
    </div>
  );
};

export default FillUp;
