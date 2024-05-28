import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
