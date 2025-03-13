import { root } from '@lynx-js/react'

import { App } from './App.js'
import { MemoryRouter, Route, Routes } from 'react-router'
import HomeScreen from './screens/testscreens/HomeScreen.jsx'
import { Template } from './Template.jsx'
import ProfileScreen from './screens/testscreens/ProfileScreen.jsx'

root.render(
<MemoryRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<HomeScreen />} />
    <Route path="/profile" element={<ProfileScreen />} />
    <Route path="/template" element={<Template />} />
  </Routes>
</MemoryRouter>,)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
