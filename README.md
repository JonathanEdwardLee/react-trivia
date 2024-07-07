# Music Theory Trivia Game

## Overview

This project is a Music Theory Trivia Game built with React. The game allows users to select from different categories of music theory questions, test their knowledge, view their score, and see their personal high scores. The game is designed to provide feedback on each answer and supports navigation between questions.

[Watch a walkthrough of the game in action](https://www.loom.com/share/c3d07995f8d04becb90b5e805bf32ce3)

## Features

- **Multiple Categories**: Users can choose from Scales, Modes, Chords, and Harmony categories.
- **Randomized Questions**: Each category's questions are presented in a random order.
- **Score Tracking**: Users' scores are tracked, and high scores are saved using local storage.
- **Answer Feedback**: Users receive immediate feedback on their answers with navigation options.
- **Responsive Design**: The game is styled for optimal viewing on both web and mobile devices.

## Tools and Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
  - **useState**: For managing state in the game.
  - **useEffect**: For handling side effects such as loading and saving high scores.
- **Vite**: A build tool that provides a fast development environment.
- **CSS**: For styling the game, ensuring a consistent look and feel across different components.

### Components

- **App**: The main component that manages the game state and renders other components based on the game state.
- **QuestionCard**: A component that displays a question and possible answers.
- **AnswerCard**: A component that displays the correct answer and provides feedback on the user's answer.

### Local Storage

- **LocalStorage API**: Used to save and load high scores, ensuring that users' scores persist between sessions.

### Styling

- **CSS Flexbox**: Used to layout components in a flexible and responsive manner.
- **Custom Fonts and Colors**: To match the dark theme of the game, with specific colors for buttons, background, and text.

### Development Tools

- **Visual Studio Code**: An integrated development environment (IDE) used for coding the project.
- **Git and GitHub**: For version control and collaboration, with the project hosted on GitHub.

## How to Play

1. **Start the Game**: Open the game and choose a category or select "All Topics" to begin.
2. **Answer Questions**: Click on the options to answer the questions. The game will provide feedback on your answers.
3. **Navigate**: Use the previous and next buttons to navigate between questions.
4. **View Scores**: At the end of the game, view your current score and personal high scores.
5. **Start Over**: Click the "Start Over?" button to play again.

## Future Enhancements

- **Audio and Diagrams**: Adding audio clips and diagrams to enhance the learning experience.
- **Global High Scores**: Implementing a global high score board to compare scores with other players.



