import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import QuizPage from "./components/QuizPage/QuizPage";
import Result from "./components/Result";

const App: React.FC = () => {
  const [personalDetails, setPersonalDetails] = useState({
    language: "english",
  });
  const [result, setResult]: any = useState([]);
  let navigate = useNavigate();

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <DetailsForm
              navigate={navigate}
              setPersonalDetails={setPersonalDetails}
            />
          }
        />
        <Route
          path="/quiz"
          element={<QuizPage language={personalDetails.language} setResult={setResult}/>}
        />
        <Route
          path="/result"
          element={<Result navigate={navigate} result={result} />}
        />
      </Routes>
    </div>
  );
};

export default App;
