// src/components/AnswerCard.jsx
// src/components/AnswerCard.jsx
import React from 'react';

const AnswerCard = ({ question, userAnswer, onNext, onPrevious }) => {
  const isCorrect = userAnswer === question.answer;
  return (
    <div className="answer-card">
      <h2>{question.question}</h2>
      <p>Your answer: {userAnswer}</p>
      <p>Correct answer: {question.answer}</p>
      <p className="feedback">{isCorrect ? "Correct!" : "You'll get it next time!"}</p>
      <div className="navigation-buttons">
        <button onClick={onPrevious}>&larr; Previous</button>
        <button onClick={onNext}>Next &rarr;</button>
      </div>
    </div>
  );
};

export default AnswerCard;
