import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const savedScores = localStorage.getItem('highScores');
    setHighScores(savedScores ? JSON.parse(savedScores) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }, [highScores]);

  const questionsData = [
    {
      question: "What are the notes of the C major scale?",
      options: ["C, D, E, F, G, A, B", "C, D, F, G, A, B, C", "C, D, E, G, A, B, C"],
      answer: "C, D, E, F, G, A, B",
    },
    // Add more questions here
  ];

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const date = new Date().toLocaleString();
      setHighScores([...highScores, { date, score }]);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="app">
      <h1>Music Theory Trivia Game</h1>
      {questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      <h2>Score: {score}</h2>
      <h2>High Scores</h2>
      <ul>
        {highScores.map((scoreEntry, index) => (
          <li key={index}>
            {scoreEntry.date}: {scoreEntry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
