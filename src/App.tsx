import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import QuizPage from "./components/QuizPage/QuizPage";
import Result from "./components/Result/Result";

const App: React.FC = () => {
  const [personalDetails, setPersonalDetails]: any = useState([]);
  const [data, setData]: any = useState([]);
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
          element={
            <QuizPage
              language={personalDetails.language}
              setData={setData}
              data={data}
              navigate={navigate} 
            />
          }
        />
        <Route
          path="/result"
          element={<Result data={data} />}
        />
      </Routes>
    </div>
  );
};

export default App;
