import { useEffect, useState } from "react";
import Question from "../Question/Question";
import "./quizPage.css";
import {
  questionsDataEnglish,
  questionsDataHindi,
  questionsDataSpanish,
} from "../../questionsData";
import Pagination from "../Pagination/Pagination";
import { Button } from "@mui/material";

type Props = {
  language: string;
};

const QuizPage: React.FC<Props> = ({ ...props }) => {
  const [data, setData]: any = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [selectedAns, setSelectedAns] = useState([]);

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

  const handleSubmit = () => {
    console.log("submit");
  };

  const prevQue = () => {
    setCurrPage((prevState) => prevState - 1);
  };

  const nextQue = () => {
    currPage < data.length - 1
      ? setCurrPage((prevState) => prevState + 1)
      : handleSubmit();
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
          <Question item={data[currPage]} />
          <div className="to-fro-btns">
            {currPage > 0 && (
              <Button variant="contained" onClick={prevQue}>
                Prev question
              </Button>
            )}
            <Button variant="contained" onClick={nextQue}>
              {currPage < data.length - 1 ? "Next question" : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
