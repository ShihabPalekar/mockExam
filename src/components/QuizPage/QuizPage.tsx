import { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./quizPage.css";
import {
  questionsDataEnglish,
  questionsDataHindi,
  questionsDataSpanish,
} from "../../questionsData";
import Pagination from "../Pagination/Pagination";

type Props = {
  language: string;
};

const QuizPage: React.FC<Props> = ({ ...props }) => {
  const [data, setData]: any = useState([]);
  const [currPage, setCurrPage] = useState(0);

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

  const prevQue = () => {
    setCurrPage((prevState) => prevState - 1);
  };

  const nextQue = () => {
    setCurrPage((prevState) => prevState + 1);
  };

  const handleQueAttempt = (qid: number, ans: any) => {
    setData((prevState: any) =>
      prevState.map((i: any) => (i.id === qid ? { ...i, ansInput: ans } : i))
    );
    nextQue();
  };

  return (
    <div>
      {data[currPage] !== undefined && (
        <div>
          <Pagination
            data={data}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
          <Question
            item={data[currPage]}
            currPage={currPage}
            data={data}
            prevQue={prevQue}
            nextQue={nextQue}
            handleQueAttempt={handleQueAttempt}
          />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
