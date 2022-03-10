import { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./quizPage.css";
import {
  questionsDataEnglish,
  questionsDataHindi,
  questionsDataSpanish,
} from "../../questionsData";

type Props = {
  language: string;
};

const QuizPage: React.FC<Props> = ({ ...props }) => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    const { language } = props;
    if (language === "english") {
      setData(questionsDataEnglish);
    } else if (language === "hindi") {
      setData(questionsDataHindi);
    } else if (language === "spanish") {
      setData(questionsDataSpanish);
    }
  }, []);

  return (
    <div>
      {data.map((item: any) => {
        return <Question item={item} key={item.id} />;
      })}
    </div>
  );
};

export default QuizPage;
