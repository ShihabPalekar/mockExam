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

  console.log(data.length);

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

  console.log(data[currPage], "----quizpage");

  return (
    <div>
      {data[currPage] !== undefined && (
        <div>
          <Pagination data={data} />
          <Question item={data[currPage]} />
          <div className="to-fro-btns">
            {currPage > 0 && <Button variant="contained">Prev question</Button>}
            <Button variant="contained">
              {currPage < data.length - 1 ? "Next question" : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
