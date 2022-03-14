import FillUp from "./FillUp";
import MatchUp from "./MatchUp";
import MCQ from "./MCQ";
import MultiSelect from "./MultiSelect";
import TrueFalse from "./TrueFalse";
import "./question.css";

type Props = {
  item: any;
  currPage: number;
  data: any;
  handleQueAttempt: any;
  prevQue: any;
  nextQue: any;
};

const Question: React.FC<Props> = ({ ...props }) => {
  console.log(props.data, "quePage");
  switch (props.item.type) {
    case "mcq":
      return (
        <MCQ
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          handleQueAttempt={props.handleQueAttempt}
        />
      );
    case "boolean":
      return (
        <TrueFalse
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          handleQueAttempt={props.handleQueAttempt}
        />
      );
    case "fill-up":
      return (
        <FillUp
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          handleQueAttempt={props.handleQueAttempt}
        />
      );
    case "multi-select":
      return (
        <MultiSelect
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          handleQueAttempt={props.handleQueAttempt}
        />
      );
    case "match-up":
      return (
        <MatchUp
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          handleQueAttempt={props.handleQueAttempt}
        />
      );
    default: {
      return <div></div>;
    }
  }
};

export default Question;
