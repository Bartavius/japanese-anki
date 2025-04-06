import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Dashboard.css';

// Define the lesson type
interface Lesson {
  id: number;
  title: string;
  description: string;
  isAttempted: boolean;
  lastAttemptDate?: string;
  score?: number;
  nextStudyDate?: string;
}

// Sample data - replace with your JSON data later
const sampleLessons: Lesson[] = [
  {
    id: 1,
    title: "Lesson 1: blah blah",
    description: "Description about lesson",
    isAttempted: false
  },
  {
    id: 2,
    title: "Lesson 2: blah blah",
    description: "Description about lesson",
    isAttempted: true,
    lastAttemptDate: "2023-04-02",
    score: 85,
    nextStudyDate: "2023-04-05"
  },
  {
    id: 3,
    title: "Lesson 3: blah blah",
    description: "Description about lesson",
    isAttempted: false
  },
  {
    id: 4,
    title: "Lesson 4: blah blah",
    description: "Description about lesson",
    isAttempted: false
  },
  {
    id: 5,
    title: "Lesson 5: blah blah",
    description: "Description about lesson",
    isAttempted: true,
    lastAttemptDate: "2023-04-01",
    score: 92,
    nextStudyDate: "2023-04-08"
  }
];

export default function Dashboard() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would fetch this data from your JSON file or API
    setLessons(sampleLessons);
  }, []);

  const handleStartLesson = (lessonId: number) => {
    // Navigate to lesson overview screen
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <view className="dashboard-container">
      <scroll-view 
        className="lesson-scrollview"
        scroll-orientation="vertical"
        scroll-y={true}
        scroll-with-animation="true"
      >
        {lessons.map((lesson) => (
          <view key={lesson.id} className="lesson-card">
            <view className="lesson-header">
              <view className="icon-container">
                <text className="play-icon">▶</text>
              </view>
              <view className="lesson-info">
                <text className="lesson-title">{lesson.title}</text>
                <text className="lesson-description">{lesson.description}</text>
                
                {lesson.isAttempted && (
                  <view className="attempt-info">
                    <text className="attempt-text">
                      Last attempt: {lesson.lastAttemptDate} • Score: {lesson.score}%
                    </text>
                    <text className="next-study-text">
                      Next study: {lesson.nextStudyDate}
                    </text>
                  </view>
                )}
              </view>
            </view>
            
            <view 
              className="start-button"
              bindtap={() => handleStartLesson(lesson.id)}
            >
              <text className="start-icon">★</text>
              <text className="start-text">Start</text>
            </view>
          </view>
        ))}
      </scroll-view>
    </view>
  );
}