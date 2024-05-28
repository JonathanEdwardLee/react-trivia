import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [initials, setInitials] = useState('');
  const [category, setCategory] = useState("All");
  const [screen, setScreen] = useState("start");


  useEffect(() => {
    const savedScores = localStorage.getItem('highScores');
    setHighScores(savedScores ? JSON.parse(savedScores) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }, [highScores]);

  const questionsData = [
    // Scales
    {
      category: "Scales",
      question: "What are the notes of the G major scale?",
      options: ["G, A, B, C, D, E, F#", "G, A, B, C, D, E, F", "G, A, B, C, D, E, G"],
      answer: "G, A, B, C, D, E, F#",
    },
    {
      category: "Scales",
      question: "What is the pattern of whole and half steps in a major scale?",
      options: ["Whole, Whole, Half, Whole, Whole, Whole, Half", "Whole, Half, Whole, Whole, Half, Whole, Whole", "Whole, Whole, Whole, Half, Whole, Whole, Half"],
      answer: "Whole, Whole, Half, Whole, Whole, Whole, Half",
    },
    // Modes
    {
      category: "Modes",
      question: "Which mode is often associated with a 'minor' sound but has a major sixth?",
      options: ["Dorian", "Phrygian", "Mixolydian"],
      answer: "Dorian",
    },
    {
      category: "Modes",
      question: "Name the notes in the D Dorian mode.",
      options: ["D, E, F, G, A, B, C", "D, E, F#, G, A, B, C#", "D, E, F, G, A, Bb, C"],
      answer: "D, E, F, G, A, B, C",
    },
    // Chords
    {
      category: "Chords",
      question: "What notes make up a C major chord?",
      options: ["C, E, G", "C, D, E", "C, F, G"],
      answer: "C, E, G",
    },
    {
      category: "Chords",
      question: "What is the chord for G minor?",
      options: ["Gmin", "Gmaj", "Gdim", "Gaug"],
      answer: "Gmin",
    },
    // Harmony
    {
      category: "Harmony",
      question: "What is the I-IV-V progression in the key of C?",
      options: ["C-F-G", "C-D-E", "C-G-F"],
      answer: "C-F-G",
    },
    {
      category: "Harmony",
      question: "What is a secondary dominant chord?",
      options: ["A dominant chord that resolves to a diatonic chord other than the tonic", "A minor chord that resolves to the tonic", "A diminished chord that resolves to the tonic"],
      answer: "A dominant chord that resolves to a diatonic chord other than the tonic",
    },
  ];

  useEffect(() => {
    const filteredQuestions = category === "All" 
      ? questionsData 
      : questionsData.filter(q => q.category === category);
    setQuestions(filteredQuestions);
  }, [category]);

  const handleAnswer = (answer) => {
    let newScore = score;
    if (answer === questions[currentQuestionIndex].answer) {
      newScore += 1;
      setScore(newScore);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const date = new Date().toLocaleString();
      const updatedScores = [...highScores, { date, score: newScore }]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setHighScores(updatedScores);
      setScreen("end");
      setIsHighScore(true);
    }
  };

  const handleSubmitInitials = () => {
    const date = new Date().toLocaleString();
    const newScore = { date, score, initials };
    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    setHighScores(updatedScores);
    setIsHighScore(false);
    setInitials('');
  };

  const startGame = (category) => {
    setCategory(category);
    setScore(0);
    setCurrentQuestionIndex(0);
    setScreen("game");
    setIsHighScore(false);
  };

  const resetGame = () => {
    setCategory("All");
    setScore(0);
    setCurrentQuestionIndex(0);
    setScreen("start");
  };

  return (
    <div className="app">
      <h1>Music Theory Trivia Game</h1>
      
      {screen === "start" && (
        <div className="question-card">
          <h2>Welcome to Music Theory Trivia!</h2>
          <p>Choose a category below to begin:</p>
          <button onClick={() => startGame("Scales")}>Scales</button>
          <button onClick={() => startGame("Modes")}>Modes</button>
          <button onClick={() => startGame("Chords")}>Chords</button>
          <button onClick={() => startGame("Harmony")}>Harmony</button>
          <button onClick={() => startGame("All")}>All Topics</button>
        </div>
      )}

      {screen === "game" && questions.length > 0 && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}

      {screen === "end" && (
        <div className="question-card">
          <h2>Congrats, you did it!</h2>
          <p>Would you like to try again? Please choose a category:</p>
          <button onClick={() => startGame("Scales")}>Scales</button>
          <button onClick={() => startGame("Modes")}>Modes</button>
          <button onClick={() => startGame("Chords")}>Chords</button>
          <button onClick={() => startGame("Harmony")}>Harmony</button>
          <button onClick={() => startGame("All")}>All Topics</button>
        </div>
      )}

      
     

      <div className="footer">
        <h2>Current Score: {score}</h2>
        <h2>Personal High Scores</h2>
        <ul>
          {highScores.map((scoreEntry, index) => (
            <li key={index}>
              {scoreEntry.date}: {scoreEntry.score}
            </li>
          ))}
        </ul>
        <button onClick={resetGame}>Start Over?</button>
      </div>
    </div>
  );
};

export default App;
