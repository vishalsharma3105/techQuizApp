import Header from "./Header";
import StartQuiz from "./StartQuiz";
import { useEffect, useState } from "react";
import React from "react";
import QuizAPI from "../api/QuizAPI";
import QuestionDisplay from "./QuestioDisplay";
import Score from "./Score";

const techOptions = ["Linux", "DevOps", "Docker"];

const App = () => {
  const myStyle = {
    //     backgroundImage:
    // "url('https://media.istockphoto.com/photos/gears-on-white-background-minimal-teamwork-concept-picture-id1214212832?b=1&k=20&m=1214212832&s=170667a&w=0&h=UCgyclbmrx85ScoRdh2yRYVUL2p3XscdZRlHKbdoAXA=')",
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
  };

  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [quizSet, setQuizSet] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answerArr, setAnswerArr] = useState([]);
  const [score, setScore] = useState(0);

  const onSelectTechnology = (tech) => {
    setSelectedTechnology(tech);
  };

  const onStartQuizClick = async () => {
    const response = await QuizAPI.get("/questions", {
      params: {
        apiKey: "sHKf2O9bd1zsYmGSuAJHTeeBvGnZJBH1b9T8PLNU",
         category: selectedTechnology,
        limit: 10,
      },
    });
    setQuizSet(response);
  };

  const calculateScore = () => {
    setSelectedTechnology(null);
    let score = 0;
    debugger;
    answerArr.forEach((ans, index) => {
      if (ans === quizSet.data[index].correct_answer) {
        score += 10;
      }
    });
    return score;
  };

  const moveToNextQuestion = (prevAnswer) => {
    debugger;
    if (answerArr.length < 10) {
      setAnswerArr([...answerArr, prevAnswer]);
    } else {
      setScore(calculateScore());
    }
    console.log("answer array", answerArr);

    // setCurrentQuestion(quizSet.data[answerArr.length]);
  };

  useEffect(() => {
    if (quizSet) {
      if (answerArr.length < 10)
        setCurrentQuestion(quizSet.data[answerArr.length]);
      else {
      }
    }
  }, [currentQuestion, quizSet, answerArr, score]);

  return (
    <div style={myStyle}>
      <Header Heading="Technology Quiz" />
      <StartQuiz
        techOptions={techOptions}
        onTechnologySelect={onSelectTechnology}
        selectedTechnology={selectedTechnology}
        onQuizStart={onStartQuizClick}
      />
      {!quizSet ? (
        ""
      ) : score === 0 ? (
        <QuestionDisplay
          currentQuestion={currentQuestion}
          moveToNextQuestion={moveToNextQuestion}
        />
      ) : (
        <Score score={score} />
      )}
    </div>
  );
};

export default App;
