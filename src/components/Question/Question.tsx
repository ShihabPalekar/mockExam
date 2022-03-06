import FillUp from "./FillUp";
import MatchUp from "./MatchUp";
import MCQ from "./MCQ";
import MultiSelect from "./MultiSelect";
import TrueFalse from "./TrueFalse";

const Question = ({...props}) => {
  const type = props.item.type

  console.log(type)
  switch (type) {
    case "mcq":
      return <MCQ />;
    case "boolean":
      return <TrueFalse />;
    case "fill-up":
      return <FillUp />;
    case "multi-select":
      return <MultiSelect />;
    case "match-the-pair":
      return <MatchUp />;
    default: {
      return <div></div>;
    }
  }
};

export default Question;
