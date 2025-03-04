import React, { useState, useEffect } from "react";
import "./test.css";
import { Link } from "react-router-dom";
const Test = () => {
  const [showModal, setShowModal] = useState(true);
  const [currentSection, setCurrentSection] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(240); // Timer in seconds
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const sections = {
    Aptitude: [
      {
        question:
          "A train running at 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
        answers: {
          a: "120 meters",
          b: "150 meters",
          c: "180 meters",
        },
        correctAnswer: "b",
      },
      {
        question: "Find the next term in the series: 2, 6, 12, 20, 30, ?",
        answers: {
          a: "42",
          b: "40",
          c: "44",
        },
        correctAnswer: "a",
      },
      {
        question: "What is the smallest number divisible by both 12 and 18?",
        answers: {
          a: "36",
          b: "48",
          c: "72",
        },
        correctAnswer: "c",
      },
      {
        question:
          "A person travels a distance of 120 km in 3 hours. What is the speed of the person?",
        answers: {
          a: "30 km/h",
          b: "40 km/h",
          c: "50 km/h",
        },
        correctAnswer: "b",
      },
      {
        question:
          "If a clock shows 3:15, what is the angle between the hour hand and minute hand?",
        answers: {
          a: "22.5°",
          b: "30°",
          c: "45°",
        },
        correctAnswer: "a",
      },
      {
        question:
          "What is the perimeter of a rectangle with length 12 cm and width 5 cm?",
        answers: {
          a: "34 cm",
          b: "35 cm",
          c: "36 cm",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Find the area of a triangle with base 10 cm and height 8 cm.",
        answers: {
          a: "40 cm²",
          b: "50 cm²",
          c: "60 cm²",
        },
        correctAnswer: "a",
      },
      {
        question:
          "If a car travels 150 km in 3 hours, what is its average speed?",
        answers: {
          a: "40 km/h",
          b: "50 km/h",
          c: "60 km/h",
        },
        correctAnswer: "b",
      },
      {
        question:
          "In how many years will $5000 become $6000 at an annual interest rate of 10%?",
        answers: {
          a: "5 years",
          b: "6 years",
          c: "7 years",
        },
        correctAnswer: "a",
      },
      {
        question:
          "The sum of two numbers is 60, and their difference is 10. What are the numbers?",
        answers: {
          a: "35 and 25",
          b: "40 and 20",
          c: "45 and 15",
        },
        correctAnswer: "a",
      },
      {
        question: "What is the next number in the sequence: 3, 5, 7, 11, 13, ?",
        answers: {
          a: "15",
          b: "17",
          c: "19",
        },
        correctAnswer: "b",
      },
      {
        question:
          "A car travels 120 km in 2 hours and 30 minutes. What is the average speed?",
        answers: {
          a: "45 km/h",
          b: "48 km/h",
          c: "50 km/h",
        },
        correctAnswer: "b",
      },
      {
        question: "Find the value of x in the equation: 3x + 5 = 20",
        answers: {
          a: "5",
          b: "4",
          c: "3",
        },
        correctAnswer: "b",
      },
      {
        question:
          "A man sells a product for $20, gaining a profit of 25%. What is the cost price?",
        answers: {
          a: "$15",
          b: "$16",
          c: "$17",
        },
        correctAnswer: "a",
      },
      {
        question: "What is the LCM of 8 and 12?",
        answers: {
          a: "48",
          b: "24",
          c: "36",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Find the compound interest on $1000 for 2 years at 10% per annum, compounded annually.",
        answers: {
          a: "$200",
          b: "$210",
          c: "$220",
        },
        correctAnswer: "b",
      },
      {
        question: "What is the average of 4, 7, 10, 12?",
        answers: {
          a: "8.5",
          b: "9.5",
          c: "10",
        },
        correctAnswer: "a",
      },
      {
        question:
          "The cost of 3 pens and 2 pencils is $2.40. If the cost of a pen is $0.80, what is the cost of a pencil?",
        answers: {
          a: "$0.40",
          b: "$0.60",
          c: "$0.50",
        },
        correctAnswer: "a",
      },
      {
        question:
          "What is the area of a circle with a radius of 7 cm? (Use π = 22/7)",
        answers: {
          a: "154 cm²",
          b: "100 cm²",
          c: "49 cm²",
        },
        correctAnswer: "c",
      },
      {
        question: "What is the value of x in the equation: 5x - 7 = 18?",
        answers: {
          a: "5",
          b: "6",
          c: "7",
        },
        correctAnswer: "b",
      },
    ],

    Reasoning: [
      {
        question:
          "If all the apples are fruits and all fruits are sweet, then which of the following is true?",
        answers: {
          a: "All apples are sweet",
          b: "All fruits are apples",
          c: "Some apples are not sweet",
        },
        correctAnswer: "a",
      },
      {
        question: "Find the odd one out: 7, 13, 19, 21, 23",
        answers: {
          a: "7",
          b: "21",
          c: "19",
        },
        correctAnswer: "b",
      },
      {
        question:
          "If the day before yesterday was Thursday, what day will it be after tomorrow?",
        answers: {
          a: "Sunday",
          b: "Friday",
          c: "Saturday",
        },
        correctAnswer: "c",
      },
      {
        question: "Choose the missing number in the series: 1, 4, 9, 16, ?, 36",
        answers: {
          a: "20",
          b: "25",
          c: "30",
        },
        correctAnswer: "b",
      },
      {
        question: "If 2 pencils cost $1.50, what is the cost of 5 pencils?",
        answers: {
          a: "$3.50",
          b: "$3.75",
          c: "$4.00",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Which of the following numbers is divisible by both 2 and 3?",
        answers: {
          a: "10",
          b: "15",
          c: "18",
        },
        correctAnswer: "c",
      },
      {
        question:
          "If a man is facing north, then after making three right turns, which direction will he face?",
        answers: {
          a: "South",
          b: "East",
          c: "West",
        },
        correctAnswer: "a",
      },
      {
        question: "Which number replaces the question mark: 2, 4, 8, 16, ?",
        answers: {
          a: "24",
          b: "30",
          c: "32",
        },
        correctAnswer: "c",
      },
      {
        question:
          "A clock shows 6:00. What is the angle between the hour hand and minute hand?",
        answers: {
          a: "180°",
          b: "90°",
          c: "45°",
        },
        correctAnswer: "a",
      },
      {
        question: "Which one of the following figures is the odd one out?",
        answers: {
          a: "Circle",
          b: "Square",
          c: "Triangle",
        },
        correctAnswer: "b",
      },
      {
        question:
          "If you rearrange the letters 'LOOSE' it will form the name of a:",
        answers: {
          a: "City",
          b: "Animal",
          c: "Country",
        },
        correctAnswer: "a",
      },
      {
        question:
          "If you rearrange the letters of the word 'SHINING', it will form the name of a:",
        answers: {
          a: "Animal",
          b: "Country",
          c: "City",
        },
        correctAnswer: "c",
      },
      {
        question:
          "If 6 workers can complete a job in 8 days, how many days will 12 workers take to complete the same job?",
        answers: {
          a: "2 days",
          b: "3 days",
          c: "4 days",
        },
        correctAnswer: "b",
      },
      {
        question:
          "If you see a clock showing 7:30, what is the angle between the hour and minute hand?",
        answers: {
          a: "15°",
          b: "75°",
          c: "90°",
        },
        correctAnswer: "b",
      },
      {
        question: "Find the missing term in the series: A, D, G, J, ?",
        answers: {
          a: "K",
          b: "M",
          c: "L",
        },
        correctAnswer: "c",
      },
      {
        question: "Which of the following is the smallest prime number?",
        answers: {
          a: "1",
          b: "2",
          c: "3",
        },
        correctAnswer: "b",
      },
      {
        question:
          "In a code language, if 'PLANT' is written as 'QMNUS', then how is 'MOUSE' written?",
        answers: {
          a: "NPTVF",
          b: "NPTWG",
          c: "NPUGF",
        },
        correctAnswer: "a",
      },
      {
        question:
          "If two pencils cost 40 cents, how much do five pencils cost?",
        answers: {
          a: "1 dollar",
          b: "2 dollars",
          c: "1.50 dollars",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Which of the following is the next term in the series: 1, 4, 9, 16, 25, ?",
        answers: {
          a: "30",
          b: "36",
          c: "40",
        },
        correctAnswer: "b",
      },
      {
        question:
          "In a certain code, 'ABCD' is written as '1234'. How is 'EFGH' written in the same code?",
        answers: {
          a: "5678",
          b: "6789",
          c: "1234",
        },
        correctAnswer: "a",
      },
    ],
  };

  const shuffleQuestions = (section) => {
    const shuffled = [...sections[section]].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled.slice(0, 10)); // Limit to the first 10 questions after shuffle
  };

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      submitQuiz();
    }
  }, [quizStarted, timeLeft]);

  const startQuiz = (section) => {
    shuffleQuestions(section);
    setCurrentSection(section);
    setShowModal(false);
    setQuizStarted(true);
    setTimeLeft(600); // Reset timer
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const submitQuiz = () => {
    setQuizStarted(false);
    let numCorrect = 0;

    shuffledQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        numCorrect++;
      }
    });

    setResults(`You scored ${numCorrect} out of ${shuffledQuestions.length}!`);
    setTimeLeft(600); // Reset timer
  };

  return (
    <div className="mainDiv">
      {showModal && (
        <div
          className="modal"
          style={{
            backgroundColor: "#e3f2fd",
            color: "#0d47a1",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Select a Section to Begin</h2>
          {Object.keys(sections).map((section) => (
            <div
              key={section}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #0d47a1",
                borderRadius: "10px",
              }}
            >
              <h3>{section}</h3>
              <button
                onClick={() => startQuiz(section)}
                style={{
                  backgroundColor: "#0d47a1",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      )}

      {quizStarted && (
        <div
          className="quizdiv"
          style={{
            backgroundColor: "#e3f2fd",
            color: "#0d47a1",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="timer" style={{ marginBottom: "20px" }}>
            <h3>
              Time Left: {Math.floor(timeLeft / 60)}:
              {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
            </h3>
          </div>

          <div id="quiz">
            {shuffledQuestions.map((q, index) => (
              <div
                key={index}
                className="question-container"
                style={{ marginBottom: "20px" }}
              >
                <h4>{q.question}</h4>
                {Object.entries(q.answers).map(([key, value]) => (
                  <label
                    key={key}
                    style={{ display: "block", margin: "5px 0" }}
                  >
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={key}
                      onChange={() => handleAnswerChange(index, key)}
                      style={{ width: "auto" }}
                    />
                    {key}: {value}
                  </label>
                ))}
              </div>
            ))}

            <button
              id="submit"
              onClick={submitQuiz}
              style={{
                backgroundColor: "#0d47a1",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {results && (
        <div
          id="results"
          style={{
            backgroundColor: "#e3f2fd",
            color: "#0d47a1",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>{results}</h3>
          <Link to={"/"} class="button">
            <svg
              class="svgIcon"
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
            </svg>
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Test;
