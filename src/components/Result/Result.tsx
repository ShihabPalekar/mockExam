import { useEffect, useState } from "react";
import "./result.css";

type Props = {
  data: any;
};
const Result: React.FC<Props> = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const {data} = props
  const [total, setTotal] = useState(0);
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    for(let i = 0; i < data.length; i++){

      if(data[i].type === "match-up"){
        let correct = data[i].ansInput?.map((op:any) => op.answer === op.selectedOpt).filter((i:any) => i === true).length
        setMarks(prevMarks => prevMarks + correct)
        setTotal(prevTotal => prevTotal + data[i].columnA.length)
      } 
      
      else if (data[i].type === "multi-select") {
        console.log(JSON.stringify(data[i].answer))
        console.log(JSON.stringify(data[i].ansInput))
        if (JSON.stringify(data[i].answer) === JSON.stringify(data[i].ansInput)){
          console.log("true" ,"multise")
        } else {console.log("false", "multise")}
        setTotal(prevTotal => prevTotal + 1)
      } 
      
      else {
        data[i].answer === data[i].ansInput && 
        setMarks(prevMarks => prevMarks+ 1)
        setTotal(prevTotal => prevTotal + 1)
      }
    }
    setIsLoading(false)
  }, []);

  console.log(total)
  
  if (isLoading) {
    return <p>Calculating result...</p>;
  }

  return (
    <div className="results-wrapper">
      <div className="correct-ans">ans</div>
      <div className="pie">pie</div>
    </div>
  );
};

export default Result;
