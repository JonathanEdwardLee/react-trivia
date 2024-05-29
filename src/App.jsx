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
    {
      category: "Scales",
      question: "What are the notes of the A minor scale?",
      options: ["A, B, C, D, E, F, G", "A, B, D, E, F, G", "A, B, C, E, F, G"],
      answer: "A, B, C, D, E, F, G",
    },
    {
      category: "Scales",
      question: "What is the pattern of whole and half steps in a natural minor scale?",
      options: ["Whole, Half, Whole, Whole, Half, Whole, Whole", "Whole, Whole, Half, Whole, Whole, Half, Whole", "Whole, Half, Whole, Half, Whole, Whole, Half"],
      answer: "Whole, Half, Whole, Whole, Half, Whole, Whole",
    },
    {
      category: "Scales",
      question: "What are the notes of the E major scale?",
      options: ["E, F#, G#, A, B, C#, D#", "E, F, G, A, B, C, D", "E, G, A, B, C, D, E"],
      answer: "E, F#, G#, A, B, C#, D#",
    },
    {
      category: "Scales",
      question: "What are the notes of the F major scale?",
      options: ["F, G, A, Bb, C, D, E", "F, G, A, B, C, D, E", "F, G, A, Bb, C, Eb, E"],
      answer: "F, G, A, Bb, C, D, E",
    },
    {
      category: "Scales",
      question: "What is the pattern of whole and half steps in a harmonic minor scale?",
      options: ["Whole, Half, Whole, Whole, Half, Whole and a half, Half", "Whole, Half, Whole, Half, Whole, Whole, Half", "Whole, Whole, Half, Whole, Whole, Whole, Half"],
      answer: "Whole, Half, Whole, Whole, Half, Whole and a half, Half",
    },
    {
      category: "Scales",
      question: "What are the notes of the Bb major scale?",
      options: ["Bb, C, D, Eb, F, G, A", "Bb, C, Db, Eb, F, Gb, A", "Bb, C, D, E, F, G, Ab"],
      answer: "Bb, C, D, Eb, F, G, A",
    },
    {
      category: "Scales",
      question: "What are the notes of the G minor scale?",
      options: ["G, A, Bb, C, D, Eb, F", "G, A, B, C, D, E, F", "G, A, Bb, C, D, E, F"],
      answer: "G, A, Bb, C, D, Eb, F",
    },
    {
      category: "Scales",
      question: "What is the pattern of whole and half steps in a melodic minor scale (ascending)?",
      options: ["Whole, Half, Whole, Whole, Whole, Whole, Half", "Whole, Whole, Half, Whole, Whole, Whole, Half", "Whole, Half, Whole, Half, Whole, Whole, Whole"],
      answer: "Whole, Half, Whole, Whole, Whole, Whole, Half",
    },
    {
      category: "Scales",
      question: "What are the notes of the D major scale?",
      options: ["D, E, F#, G, A, B, C#", "D, E, F, G, A, Bb, C#", "D, E, F#, G, A, Bb, C"],
      answer: "D, E, F#, G, A, B, C#",
    },
    {
      category: "Scales",
      question: "What are the notes of the B minor scale?",
      options: ["B, C#, D, E, F#, G, A", "B, C, D, E, F, G, A", "B, C#, D, E, F, G, A"],
      answer: "B, C#, D, E, F#, G, A",
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
    {
      category: "Modes",
      question: "Which mode is a major scale with a raised fourth?",
      options: ["Lydian", "Mixolydian", "Phrygian"],
      answer: "Lydian",
    },
    {
      category: "Modes",
      question: "Name the notes in the G Mixolydian mode.",
      options: ["G, A, B, C, D, E, F", "G, A, Bb, C, D, E, F#", "G, A, B, C, D, E, F#"],
      answer: "G, A, B, C, D, E, F",
    },
    {
      category: "Modes",
      question: "Which mode is often associated with a 'dark' or 'Spanish' sound?",
      options: ["Phrygian", "Locrian", "Dorian"],
      answer: "Phrygian",
    },
    {
      category: "Modes",
      question: "Name the notes in the A Aeolian mode.",
      options: ["A, B, C, D, E, F, G", "A, B, C#, D, E, F#, G#", "A, B, C, D, E, F#, G"],
      answer: "A, B, C, D, E, F, G",
    },
    {
      category: "Modes",
      question: "Which mode is often associated with a 'happy' or 'uplifting' sound?",
      options: ["Ionian", "Dorian", "Lydian"],
      answer: "Ionian",
    },
    {
      category: "Modes",
      question: "Name the notes in the E Phrygian mode.",
      options: ["E, F, G, A, B, C, D", "E, F#, G, A, B, C, D", "E, F, G#, A, B, C, D"],
      answer: "E, F, G, A, B, C, D",
    },
    {
      category: "Modes",
      question: "Which mode is a natural minor scale with a lowered second?",
      options: ["Phrygian", "Locrian", "Dorian"],
      answer: "Phrygian",
    },
    {
      category: "Modes",
      question: "Name the notes in the C Lydian mode.",
      options: ["C, D, E, F#, G, A, B", "C, D, E, F, G, A, Bb", "C, D, E, F, G, A, B"],
      answer: "C, D, E, F#, G, A, B",
    },
    {
      category: "Modes",
      question: "Which mode is a major scale with a lowered seventh?",
      options: ["Mixolydian", "Lydian", "Dorian"],
      answer: "Mixolydian",
    },
    {
      category: "Modes",
      question: "Name the notes in the F Ionian mode.",
      options: ["F, G, A, Bb, C, D, E", "F, G, A, B, C, D, E", "F, G, Ab, Bb, C, D, Eb"],
      answer: "F, G, A, Bb, C, D, E",
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
      question: "What notes make up an A minor chord?",
      options: ["A, C, E", "A, B, E", "A, D, E"],
      answer: "A, C, E",
    },
    {
      category: "Chords",
      question: "What notes make up a G major chord?",
      options: ["G, B, D", "G, A, D", "G, B, E"],
      answer: "G, B, D",
    },
    {
      category: "Chords",
      question: "What notes make up a D major chord?",
      options: ["D, F#, A", "D, E, A", "D, F, A"],
      answer: "D, F#, A",
    },
    {
      category: "Chords",
      question: "What notes make up an E minor chord?",
      options: ["E, G, B", "E, G#, B", "E, A, B"],
      answer: "E, G, B",
    },
    {
      category: "Chords",
      question: "What notes make up an F major chord?",
      options: ["F, A, C", "F, G, C", "F, A, D"],
      answer: "F, A, C",
    },
    {
      category: "Chords",
      question: "What notes make up a B minor chord?",
      options: ["B, D, F#", "B, E, F#", "B, D, G"],
      answer: "B, D, F#",
    },
    {
      category: "Chords",
      question: "What notes make up a C minor chord?",
      options: ["C, Eb, G", "C, D, G", "C, F, G"],
      answer: "C, Eb, G",
    },
    {
      category: "Chords",
      question: "What notes make up an A major chord?",
      options: ["A, C#, E", "A, C, E", "A, D, E"],
      answer: "A, C#, E",
    },
    {
      category: "Chords",
      question: "What notes make up a B diminished chord?",
      options: ["B, D, F", "B, E, F", "B, D, E"],
      answer: "B, D, F",
    },
    {
      category: "Chords",
      question: "What notes make up a G augmented chord?",
      options: ["G, B, D#", "G, A, D#", "G, B, E"],
      answer: "G, B, D#",
    },
    {
      category: "Chords",
      question: "What notes make up an E major chord?",
      options: ["E, G#, B", "E, G, B", "E, A, B"],
      answer: "E, G#, B",
    },
    {
      category: "Chords",
      question: "What notes make up a D minor chord?",
      options: ["D, F, A", "D, E, A", "D, F#, A"],
      answer: "D, F, A",
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
    {
      category: "Harmony",
      question: "What is the ii-V-I progression in the key of G?",
      options: ["Am-D7-G", "Bm-E7-A", "Cm-F7-Bb"],
      answer: "Am-D7-G",
    },
    {
      category: "Harmony",
      question: "What is a perfect cadence?",
      options: ["V-I", "IV-I", "V-vi"],
      answer: "V-I",
    },
    {
      category: "Harmony",
      question: "What is the relative minor of C major?",
      options: ["A minor", "D minor", "E minor"],
      answer: "A minor",
    },
    {
      category: "Harmony",
      question: "What is the interval between C and G?",
      options: ["Perfect Fifth", "Perfect Fourth", "Major Third"],
      answer: "Perfect Fifth",
    },
    {
      category: "Harmony",
      question: "What is the interval between E and B?",
      options: ["Perfect Fifth", "Major Sixth", "Perfect Fourth"],
      answer: "Perfect Fifth",
    },
    {
      category: "Harmony",
      question: "What is the V chord in the key of D major?",
      options: ["A", "G", "E"],
      answer: "A",
    },
    {
      category: "Harmony",
      question: "What is the IV chord in the key of A major?",
      options: ["D", "E", "G"],
      answer: "D",
    },
    {
      category: "Harmony",
      question: "What is an augmented chord?",
      options: ["A chord with a raised fifth", "A chord with a lowered fifth", "A chord with a major third and a perfect fifth"],
      answer: "A chord with a raised fifth",
    },
    {
      category: "Harmony",
      question: "What is a diminished chord?",
      options: ["A chord with a minor third and a lowered fifth", "A chord with a major third and a raised fifth", "A chord with a minor third and a perfect fifth"],
      answer: "A chord with a minor third and a lowered fifth",
    },
    {
      category: "Harmony",
      question: "What is the interval between A and C#?",
      options: ["Major Third", "Perfect Fourth", "Minor Third"],
      answer: "Major Third",
    },
    
  ];
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const filteredQuestions = category === "All" 
      ? questionsData 
      : questionsData.filter(q => q.category === category);
      setQuestions(shuffleArray(filteredQuestions));
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
