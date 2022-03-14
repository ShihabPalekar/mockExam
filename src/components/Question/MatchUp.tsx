import { Button, TextField } from "@mui/material";

type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
  selectedAns: any;
};

const MatchUp: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;
  const ques = queObj.options.map((i: any) => i.q);
  const shuffledAns = queObj.options
    .map((i: any) => i.a)
    .sort((a: any, b: any) => 0.5 - Math.random());

  return (
    <div>
      <h2>{queObj.que}</h2>
      <div className="match-up-options-wrapper">
        <div>
          <p className="column-heading">Column A</p>
          {ques.map((i: string) => {
            return (
              <p>
                <span style={{ marginRight: "10px" }}>
                  {ques.indexOf(i) + 1}.
                </span>
                <span>{i}</span>
              </p>
            );
          })}
        </div>
        <div className="match-up-answers-column">
          <p className="column-heading">Column B</p>
          {shuffledAns.map((i: string) => {
            return (
              <p>
                <span style={{ marginRight: "10px" }}>
                  {String.fromCharCode(shuffledAns.indexOf(i) + 65)}.
                </span>
                <span>{i}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="match-up-answers">
        <p className="column-heading">Your answers:</p>
        {ques.map((i: string) => {
          return (
            <p>
              <span style={{ marginRight: "10px" }}>
                {ques.indexOf(i) + 1}.
              </span>
              <TextField variant="standard" style={{ width: "60px" }} />
            </p>
          );
        })}
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

export default MatchUp;
