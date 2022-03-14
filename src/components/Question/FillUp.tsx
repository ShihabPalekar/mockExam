import { Button, TextField } from "@mui/material";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  selectedAns: any;
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

export default FillUp;
