import { root } from '@lynx-js/react'
import './App.css';
import { MemoryRouter, Route, Routes } from 'react-router'
import HomeScreen from './screens/testscreens/HomeScreen.jsx'
import { Template } from './Template.jsx'
import ProfileScreen from './screens/testscreens/ProfileScreen.jsx'
import Dashboard from './screens/Dashboard/Dashboard.jsx'
import LessonOverview from './screens/Lessons/LessonOverview.jsx'
import MCQ from './screens/Lessons/Questions/MCQ.jsx';

root.render(
<MemoryRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/home" element={<HomeScreen />} />
    <Route path="/profile" element={<ProfileScreen />} />
    <Route path="/template" element={<Template />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/lesson/:lessonId" element={<LessonOverview />} />
    <Route path="/lesson/:lessonId/quiz" element={<MCQ />} />
    <Route path="/lesson/:lessonId/quiz/:qId" element={<MCQ />} /> {/* maybe query instead? */}
  </Routes>
</MemoryRouter>,)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
