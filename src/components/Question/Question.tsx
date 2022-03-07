import FillUp from "./FillUp";
import MatchUp from "./MatchUp";
import MCQ from "./MCQ";
import MultiSelect from "./MultiSelect";
import TrueFalse from "./TrueFalse";
import "./question.css"

const Question = ({...props}) => {
  const {item} = props

  switch (item.type) {
    case "mcq":
      return <MCQ queObj={item}/>;
    case "boolean":
      return <TrueFalse queObj={item}/>;
    case "fill-up":
      return <FillUp queObj={item}/>;
    case "multi-select":
      return <MultiSelect queObj={item}/>;
    case "match-up":
      return <MatchUp queObj={item}/>;
    default: {
      return <div></div>;
    }
  }
};

export default Question;
