import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import './TextInputQuestion.css';

interface TextQuestion {
  id: number;
  promptText: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
}

// Sample data
const sampleQuestion: TextQuestion = {
  id: 1,
  promptText: "Translate this sentence to Japanese: 'Hello, how are you?'",
  correctAnswer: "こんにちは、お元気ですか？",
  acceptableAnswers: [
    "こんにちは、お元気ですか？",
    "こんにちは、お元気ですか?",
    "こんにちは、お元気？",
    "こんにちは、元気？"
  ]
};

function ShortAnswer() {
  const [question, setQuestion] = useState<TextQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { questionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // fetch later
    setQuestion(sampleQuestion);
  }, [questionId]);

  const handleInputChange = (e: any) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (!question) return;

    const normalizedUserAnswer = userAnswer.trim();
    const isExactMatch = normalizedUserAnswer === question.correctAnswer;
    const isAcceptableMatch = question.acceptableAnswers?.some(
      answer => normalizedUserAnswer === answer
    );

    setIsSubmitted(true);
    setIsCorrect(isExactMatch || !!isAcceptableMatch);

    if (isExactMatch || isAcceptableMatch) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct answer is: ${question.correctAnswer}`);
    }
  };

  const handleContinue = () => {
    // navigation tbd ngl
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setFeedback('');
  };

  if (!question) {
    return <view className="loading"><text>Loading...</text></view>;
  }

  return (
    <view className="text-input-container">
      {/* Question Prompt */}
      <view className="prompt-section">
        <text className="prompt-text">{question.promptText}</text>
      </view>

      {/* Answer Input */}
      <view className="answer-section">
        <input
          type="text"
          className="answer-input"
          placeholder="Type your answer here..."
          value={userAnswer}
          onInput={handleInputChange}
          disabled={isSubmitted}
        />
      </view>

      {/* Submit Button */}
      {!isSubmitted ? (
        <view 
          className="submit-button" 
          bindtap={checkAnswer}
        >
          <text className="button-text">Submit</text>
        </view>
      ) : (
        <view className="feedback-section">
          <text className={`feedback-text ${isCorrect ? 'correct' : 'incorrect'}`}>
            {feedback}
          </text>
          <view 
            className="continue-button"
            bindtap={handleContinue}
          >
            <text className="button-text">Continue</text>
          </view>
        </view>
      )}
    </view>
  );
}

export default ShortAnswer;