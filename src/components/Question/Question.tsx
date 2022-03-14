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
  prevQue: any;
  nextQue: any;
  selectedAns: any;
};

const Question: React.FC<Props> = ({ ...props }) => {
  switch (props.item.type) {
    case "mcq":
      return <MCQ queObj={props.item} currPage={props.currPage} data={props.data} prevQue={props.prevQue} nextQue={props.nextQue} selectedAns={props.selectedAns} />;
    case "boolean":
      return <TrueFalse queObj={props.item} currPage={props.currPage} data={props.data} prevQue={props.prevQue} nextQue={props.nextQue} selectedAns={props.selectedAns}/>;
    case "fill-up":
      return <FillUp queObj={props.item} currPage={props.currPage} data={props.data} prevQue={props.prevQue} nextQue={props.nextQue} selectedAns={props.selectedAns}/>;
    case "multi-select":
      return <MultiSelect queObj={props.item} currPage={props.currPage} data={props.data} prevQue={props.prevQue} nextQue={props.nextQue} selectedAns={props.selectedAns}/>;
    case "match-up":
      return <MatchUp queObj={props.item} currPage={props.currPage} data={props.data} prevQue={props.prevQue} nextQue={props.nextQue} selectedAns={props.selectedAns}/>;
    default: {
      return <div></div>;
    }
  }
};

export default Question;
