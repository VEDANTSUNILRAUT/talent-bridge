import React, { useState, useEffect, useRef } from "react";
import "./mock.css";

const MockInterview = () => {
  const questions = {
    technical: [
      "Explain closures in JavaScript.",
      "What is React virtual DOM?",
      "How does event delegation work in JavaScript?",
      "What are higher-order functions?",
      "What is the difference between REST and GraphQL?",
      "Explain the concept of Big O notation.",
      "What are JavaScript promises, and how do they work?",
      "What is a CSS preprocessor? Give examples.",
      "How does garbage collection work in JavaScript?",
      "What are React hooks, and why are they used?",
    ],
    behavioral: [
      "Tell me about a time you faced conflict at work.",
      "Describe a situation where you took initiative.",
      "How do you handle feedback?",
      "Give an example of a goal you achieved under pressure.",
      "How do you manage multiple priorities?",
      "Tell me about a time you failed and how you handled it.",
      "Describe a time you went above and beyond.",
      "What motivates you to perform well?",
      "How do you handle disagreements with teammates?",
      "Describe a situation where you demonstrated leadership.",
    ],
    situational: [
      "What would you do if you missed a deadline?",
      "How would you handle a difficult client?",
      "You’re asked to lead a project outside your expertise. What do you do?",
      "How would you approach resolving a team conflict?",
      "What would you do if a teammate isn’t contributing?",
      "How would you handle an ethical dilemma at work?",
      "What steps would you take if your project is behind schedule?",
      "How would you handle receiving unclear instructions?",
      "What would you do if a coworker took credit for your work?",
      "How would you handle being assigned multiple urgent tasks at once?",
    ],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("technical");
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const startInterview = () => {
    setIsRunning(true);
    setIsPaused(false);
    setTime(0);
    setCurrentQuestionIndex(0);
  };

  const pauseInterview = () => {
    setIsPaused((prev) => !prev);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions[selectedCategory].length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setUserAnswer("");
    } else {
      alert("Interview Completed!");
      setIsRunning(false);
    }
  };

  const startListening = () => {
    if (!recognition.current) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "en-US";

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserAnswer((prev) => prev + " " + transcript);
        setIsListening(false);
      };

      recognition.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
    }

    recognition.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="mock-interview-container">
        <h1>Mock Interview</h1>
      <header className="header">
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="technical">Technical</option>
          <option value="behavioral">Behavioral</option>
          <option value="situational">Situational</option>
        </select>
        <div className="timer">{formatTime(time)}</div>
      </header>
      
      <div id="question-text">
        <strong>Question:</strong> {questions[selectedCategory][currentQuestionIndex]}
      </div>
      <div className="answer-input">
        <textarea
          id="user-answer"
          placeholder="Type your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={!isRunning}
        />
        <button id="mic-btn" onClick={isListening ? stopListening : startListening} disabled={!isRunning}>
          {isListening ? "🎤 Stop" : "🎤 Speak"}
        </button>
      </div>
      <div className="button-group">
        <button onClick={nextQuestion} disabled={!isRunning}>
          Next Question
        </button>
        <button onClick={pauseInterview} disabled={!isRunning}>
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button onClick={startInterview}>{isRunning ? "Restart" : "Start"} Interview</button>
      </div>
      <div className="video-call">
        <div className="video-call-label">Video Call Feature (Integration Required)</div>
        <iframe
          title="Video Call Placeholder"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
};

export default MockInterview;
