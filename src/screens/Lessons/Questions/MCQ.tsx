import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import './MCQ.css';

interface Choice {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  questionText: string;
  imageUrl?: string;
  choices: Choice[];
}

// Sample questions
const sampleQuestion: Question = {
  id: 1,
  questionText: "What is the Japanese word for 'hello'?",
  choices: [
    {
      id: 1,
      text: "こんにちは (Konnichiwa)",
      isCorrect: true
    },
    {
      id: 2,
      text: "さようなら (Sayounara)",
      isCorrect: false
    },
    {
      id: 3,
      text: "ありがとう (Arigatou)",
      isCorrect: false
    },
    {
      id: 4,
      text: "おはよう (Ohayou)",
      isCorrect: false
    }
  ]
};

function MCQ() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { questionId } = useParams();
  const navigate = useNavigate();

  // willl have to figure out the addresses and fetching for going from one question
  // to another question (so on)

  useEffect(() => {
    // will fetch later
    setQuestion(sampleQuestion);
  }, [questionId]);

  const handleChoiceSelect = (choiceId: number) => {
    if (isAnswered) return;
    
    setSelectedChoice(choiceId);
    setIsAnswered(true);
    
    const choice = question?.choices.find(c => c.id === choiceId);
    setIsCorrect(choice?.isCorrect || false);
  };

  const handleContinue = () => {
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  if (!question) {
    return <view className="loading"><text>Loading...</text></view>;
  }

  return (
    <view className="multiple-choice-container">
      {/* Question Section */}
      <view className="question-section">
        <view className="question-content">
          <text className="question-text">{question.questionText}</text>
          {question.imageUrl && (
            <view className="question-image-container">
              <image className="question-image" src={question.imageUrl} />
            </view>
          )}
        </view>
      </view>

      {/* Answer Options Section */}
      <view className="choices-grid">
        {question.choices.map((choice) => (
          <view 
            key={choice.id}
            className={`choice-item ${selectedChoice === choice.id ? 
              (choice.isCorrect ? 'correct' : 'incorrect') : ''}`}
            bindtap={() => handleChoiceSelect(choice.id)}
          >
            <text className="choice-text">{choice.text}</text>
          </view>
        ))}
      </view>

      {/* Continue Button - Only show after answering */}
      {isAnswered && (
        <view className="footer">
          <view className="feedback-text">
            <text>{isCorrect ? "Correct!" : "Incorrect. Try again."}</text>
          </view>
          <view className="continue-button" bindtap={handleContinue}>
            <text className="button-text">Continue</text>
          </view>
        </view>
      )}
    </view>
  );
}

export default MCQ;