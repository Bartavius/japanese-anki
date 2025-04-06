import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import NavBackButton from '../../assets/components/NavBackButton.jsx';
import './LessonOverview.css';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
}

interface LessonData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  accordionItems: AccordionItem[];
}

// Sample data - replace with your JSON data later
const sampleLesson: LessonData = {
  id: 1,
  title: "Lesson 1:",
  subtitle: "Hiragana and Katakana",
  description: "fdsafdsafsdfsdafsdfsafkslnflkwafnewlknfckds.nafskdjanfkdslnfksdanfkdslnafjdshgkbkhgvhjbhjbjfkds.nafskdjanfkdslnfksdanfkdslnafjdshgkbkhgvhjbhjbjfkds.nafskdjanfkdslnfksdanfkdslnafjdshgkbkhgvhjbhjbjfkds.nafskdjanfkdslnfksdanfkdslnafjdshgkbkhgvhjbhjbjfkds.nafskdjanfkdslnfksdanfkdslnafjdshgkbkhgvhjbhjbjf",
  accordionItems: [
    {
      id: 1,
      title: "Title",
      content: "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
      isOpen: true
    },
    {
      id: 2,
      title: "Title",
      content: "This section contains more information about hiragana characters and their pronunciation.",
      isOpen: false
    },
    {
      id: 3,
      title: "Title",
      content: "Here you can learn about katakana characters and when they are used in Japanese writing.",
      isOpen: false
    },
    {
      id: 4,
      title: "Title",
      content: "Practice exercises and examples to help you memorize the characters.",
      isOpen: false
    },
    {
      id: 5,
      title: "Title",
      content: "Common mistakes to avoid when writing hiragana and katakana.",
      isOpen: false
    }
  ]
};

function LessonOverview() {
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([]);
  const { lessonId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would fetch this data from your JSON file or API
    // based on the lessonId from the URL
    setLesson(sampleLesson);
    setAccordionItems(sampleLesson.accordionItems);
  }, [lessonId]);

  const toggleAccordion = (itemId: number) => {
    setAccordionItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        isOpen: item.id === itemId ? !item.isOpen : item.isOpen
      }))
    );
  };

  const handleTakeQuiz = () => {
    if (lesson) {
      navigate(`/quiz/${lesson.id}`);
    }
  };

  if (!lesson) {
    return <view className="loading"><text>Loading...</text></view>;
  }

  return (
    <view className="lesson-overview-container">
      <scroll-view 
        className="lesson-content-scrollview" 
        scroll-orientation="vertical"
        scroll-y={true} 
        scroll-with-animation="true"
      >
        <NavBackButton />
        
        <view className="lesson-overview-header">
          <text className="lesson-overview-title">{lesson.title}</text>
          <text className="lesson-subtitle">{lesson.subtitle}</text>
        </view>

        <view className="lesson-description-section">
          <text className="description-label">Description:</text>
          <text className="lesson-overview-description">{lesson.description}</text>
        </view>

        <view className="divider"></view>

        <view className="accordion-container">
          {accordionItems.map((item) => (
            <view key={item.id} className="accordion-item">
              <view 
                className="accordion-header"
                bindtap={() => toggleAccordion(item.id)}
              >
                <text className="accordion-title">{item.title}</text>
                <text className="accordion-icon">{item.isOpen ? '▲' : '▼'}</text>
              </view>
              {item.isOpen && (
                <view className="accordion-content">
                  <text className="accordion-text">{item.content}</text>
                </view>
              )}
            </view>
          ))}
        </view>

        <view className="button-container">
          <view className="take-quiz-button" bindtap={handleTakeQuiz}>
            <text className="button-text">Take Quiz</text>
          </view>
        </view>
      </scroll-view>
    </view>
  );
}

export default LessonOverview;