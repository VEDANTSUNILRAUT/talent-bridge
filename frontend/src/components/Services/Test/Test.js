import React, { useState, useEffect } from 'react';
import './test.css';

const Test = () => {
  const [showModal, setShowModal] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(240); // Timer in seconds
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const myQuestions = [
    {
      question: "1) A train running at 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
      answers: {
        a: "120 meters",
        b: "150 meters",
        c: "180 meters",
      },
      correctAnswer: "b",
    },
    {
      question: "2) In a certain code language, 'MANGO' is written as 'LZMFN'. How will 'APPLE' be written in the same code?",
      answers: {
        a: "ZOOMF",
        b: "ZOONL",
        c: "ZOOML",
      },
      correctAnswer: "c",
    },
    {
      question: "3) Find the next term in the series: 2, 6, 12, 20, 30, ?",
      answers: {
        a: "42",
        b: "40",
        c: "44",
      },
      correctAnswer: "a",
    },
    {
      question: "4) If 7 workers can complete a task in 10 days, how long will it take 14 workers to complete the same task?",
      answers: {
        a: "5 days",
        b: "7 days",
        c: "6 days",
      },
      correctAnswer: "a",
    },
    {
      question: "5) A pipe can fill a tank in 4 hours, while another pipe can empty the same tank in 6 hours. How long will it take to fill the tank if both pipes are opened together?",
      answers: {
        a: "12 hours",
        b: "10 hours",
        c: "24 hours",
      },
      correctAnswer: "b",
    },
    {
      question: "6) Rearrange the letters of the word 'LEMON' to form a meaningful word.",
      answers: {
        a: "NOLEM",
        b: "MELON",
        c: "LENOM",
      },
      correctAnswer: "b",
    },
    {
      question: "7) A person spends 20% of his income on rent, 30% on food, and saves the remaining ₹10,000. What is his total income?",
      answers: {
        a: "₹20,000",
        b: "₹25,000",
        c: "₹50,000",
      },
      correctAnswer: "c",
    },
    {
      question: "8) In a class of 60 students, 45 like Math, and 25 like Science. If 5 students like neither, how many like both subjects?",
      answers: {
        a: "15",
        b: "25",
        c: "10",
      },
      correctAnswer: "c",
    },
    {
      question: "9) If a clock strikes once at 1 o'clock, twice at 2 o'clock, and so on, how many times will it strike in 24 hours?",
      answers: {
        a: "156",
        b: "78",
        c: "84",
      },
      correctAnswer: "a",
    },
    {
      question: "10) Find the odd one out: 2, 4, 8, 16, 30, 64.",
      answers: {
        a: "16",
        b: "30",
        c: "64",
      },
      correctAnswer: "b",
    },
    {
      question: "11) If BEAR is coded as 2579 and RARE as 9495, how is BARE coded?",
      answers: {
        a: "2595",
        b: "5295",
        c: "2529",
      },
      correctAnswer: "b",
    },
    {
      question: "12) If ‘+’ means ‘×’, ‘×’ means ‘-’, and ‘-’ means ‘+’, what is the value of 8 + 2 × 5 - 3?",
      answers: {
        a: "19",
        b: "25",
        c: "17",
      },
      correctAnswer: "c",
    },
    {
      question: "13) The average of 8 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?",
      answers: {
        a: "34",
        b: "36",
        c: "38",
      },
      correctAnswer: "b",
    },
    {
      question: "14) If A is the mother of B and B is the father of C, how is A related to C?",
      answers: {
        a: "Grandmother",
        b: "Mother",
        c: "Aunt",
      },
      correctAnswer: "a",
    },
    {
      question: "15) Complete the analogy: Medicine : Disease :: Education : ?",
      answers: {
        a: "School",
        b: "Ignorance",
        c: "Teacher",
      },
      correctAnswer: "b",
    },
    {
      question: "16) A bag contains 5 red balls, 4 green balls, and 3 blue balls. What is the probability of picking a green ball?",
      answers: {
        a: "1/4",
        b: "2/3",
        c: "4/12",
      },
      correctAnswer: "a",
    },
    {
      question: "17) If 5x - 3 = 27, what is the value of x?",
      answers: {
        a: "5",
        b: "6",
        c: "7",
      },
      correctAnswer: "c",
    },
    {
      question: "18) Which of the following numbers is not a prime number?",
      answers: {
        a: "29",
        b: "27",
        c: "23",
      },
      correctAnswer: "b",
    },
    {
      question: "19) If a person travels 4 km East, then 3 km South, and finally 4 km West, how far is he from the starting point?",
      answers: {
        a: "3 km",
        b: "5 km",
        c: "7 km",
      },
      correctAnswer: "a",
    },
    {
      question: "20) What is the smallest number divisible by both 12 and 18?",
      answers: {
        a: "36",
        b: "48",
        c: "72",
      },
      correctAnswer: "c",
    },
  ];

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      submitQuiz();
    }
  }, [quizStarted, timeLeft]);

  const startQuiz = () => {
    setShowModal(false);
    setQuizStarted(true);
    setTimeLeft(600); // Reset timer
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const submitQuiz = () => {
    setQuizStarted(false);
    let numCorrect = 0;

    myQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        numCorrect++;
      }
    });

    setResults(`You scored ${numCorrect} out of ${myQuestions.length}!`);
    setTimeLeft(240); // Reset timer
  };

  return (
    <div className='mainDiv'>
      {showModal && (
        <div className="modal">
          <h2>Having to solve the 20 quiz in 20 min </h2>
          <h2>Ready to start the quiz?</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}

      {quizStarted && (
        <div className='quizdiv'>
          <div className="timer">
            <h3>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</h3>
          </div>

          <div id="quiz">
            {myQuestions.map((q, index) => (
              <div key={index} className="question-container">
                <h4>{q.question}</h4>
                {Object.entries(q.answers).map(([key, value]) => (
                  <label key={key}>
                    <input
                      type="checkbox"
                      name={`question${index}`}
                      value={key}
                      onChange={() => handleAnswerChange(index, key)}
                    />
                    {key}: {value}
                  </label>
                ))}
              </div>
            ))}

            <button id="submit" onClick={submitQuiz}>
            Submit
          </button>
          </div>

          
        </div>
      )}

      {results && (
        <div id="results">
          <h3>{results}</h3>
        </div>
      )}
    </div>
  );
};

export default Test;
