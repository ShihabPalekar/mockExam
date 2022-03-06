import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DetailsForm from "./components/DetailsForm/DetailsForm";
import QuizPage from "./components/QuizPage/QuizPage";
import Result from "./components/Result";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({language: 'english'})

  return (
    <div className="app">
        <Router>
            <Routes >
                <Route path="/" element={<DetailsForm setPersonalDetails={setPersonalDetails}/>} />
                <Route path="/quiz" element={<QuizPage language={personalDetails.language}/>} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
